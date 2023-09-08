import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/interfaces/Account';
import { AccountsService } from'src/app/service/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [AccountsService]
})
export class AccountComponent implements OnInit {

  account!: Account;

  constructor(private route: ActivatedRoute, private accountService: AccountsService) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      this.account = await this.accountService.getAccount(params['id']);
    });
  }

}
