import { Component } from '@angular/core';
import { AccountService } from 'src/app/service/AccountService';
import { Account } from 'src/app/interfaces/Account';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AccountService]
})
export class HomeComponent {
  //TODO: write account service and get accounts on page init (lifecycle hook)
}

