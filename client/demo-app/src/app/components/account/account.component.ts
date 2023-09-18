import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Account } from 'src/app/interfaces/Account';
import { AccountsService } from'src/app/service/accounts.service';
import { TransactionType } from 'src/app/interfaces/TransactionType';
import { Transaction } from 'src/app/interfaces/Transaction';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [AccountsService, DatePipe]
})

export class AccountComponent implements OnInit {
  balance: number = 0;
  account!: Account;
  transactions: Transaction[] = [];
  displayedTransactionColumns: string[] = ['date', 'id', 'accountId', 'amount', 'type'];
  constructor(private route: ActivatedRoute, private accountService: AccountsService, public datePipe: DatePipe){
    
  }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(async (params) => {
      await this.accountService.getAccount(params['account_id']).then(res => {
        this.account = res;
        // this.balance = this.account.transactions.reduce((a, b) => b.type == TransactionType.DEPOSIT ? a + b.amount : a - b.amount , 0);
      });
    });
  }

}
