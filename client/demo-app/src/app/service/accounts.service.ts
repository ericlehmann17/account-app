import { Injectable } from '@angular/core';
// import httpclient from the angular common http module
import { Apollo, QueryRef, gql } from 'apollo-angular';
import { Account, AccountsResult } from '../interfaces/Account';


@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private accountsQuery: QueryRef<{accounts: AccountsResult}>;
  private accountQuery: QueryRef<{account: Account}, {account_id: number}>;


  constructor(private apollo: Apollo) {
    this.accountsQuery = this.apollo.watchQuery({
      query: gql`query {
        accounts {
            accounts {
                account_id
                name
                email
                account_type
            }
        }
    }`
    });
    this.accountQuery = this.apollo.watchQuery({
      query: gql`query account($account_id: Int!){
        account(account_id: $account_id) {
            account_id
            name
            email
            account_type
        }
    }`
  });
}

  async getAccounts(): Promise<AccountsResult> {
    const result = await this.accountsQuery.refetch();
    return result.data.accounts;
  }

  async getAccount(account_id: number): Promise<Account> {
    const result = await this.accountQuery.refetch({account_id});
    return result.data.account;
  }

  
}

