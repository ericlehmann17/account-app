import { Component, OnInit } from '@angular/core';
import { Account, AccountsResult } from 'src/app/interfaces/Account';
import { AccountsService } from 'src/app/service/accounts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AccountsService]
})
export class HomeComponent implements OnInit {
  accounts: Account[] = [];
  count: number = 0;
  displayedColumns: string[] = ['id', 'name', 'email', 'type'];

  constructor(private accountService: AccountsService) { }

  //TODO: write account service and get accounts on page init (lifecycle hook)
  async ngOnInit(): Promise<void> {
    const res = await this.accountService.getAccounts();
    this.accounts = res.accounts;
    this.count = res.count;
  }
}

