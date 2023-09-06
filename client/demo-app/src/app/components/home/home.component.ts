import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/AccountService';
import { Account } from 'src/app/interfaces/Account';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AccountService]
})
export class HomeComponent implements OnInit {
  private account: Account[];

  constructor(private accountService: AccountService) { }

  //TODO: write account service and get accounts on page init (lifecycle hook)
  async ngOnInit(): void {
    this.account = this.accountService.getAccounts();
    throw new Error('Method not implemented.');


  }

}

