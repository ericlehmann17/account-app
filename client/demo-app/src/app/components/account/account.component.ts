import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Account } from 'src/app/interfaces/Account';
import { AccountsService } from'src/app/service/accounts.service';
import { TransactionType } from 'src/app/interfaces/TransactionType';
import { Transaction } from 'src/app/interfaces/Transaction';
import { TransactionsService } from 'src/app/service/transactions.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [AccountsService, DatePipe, TransactionsService]
})

export class AccountComponent implements OnInit {
  balance: number = 0;
  account!: Account;
  transactions: Transaction[] = [];
  displayedTransactionColumns: string[] = ['date', 'id', 'accountId', 'amount', 'type'];
  constructor(private route: ActivatedRoute, private accountService: AccountsService, public datePipe: DatePipe, private transactionsService: TransactionsService){
    
  }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(async (params) => {
      const accountId = Number(params['account_id']);
      this.account = await this.accountService.getAccount(accountId);
      this.transactions = await this.transactionsService.getTransactions(accountId).then(ret=>{
        return ret.transactions;
      });
      this.balance = this.transactions.reduce((a, b) => b.transaction_type == TransactionType.DEPOSIT ? a + b.amount : a - b.amount, 0);
    });
  }

}
