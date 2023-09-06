import { Injectable } from '@angular/core';
// import httpclient from the angular common http module
import { Apollo, QueryRef, gql } from 'apollo-angular';
import { Account, AccountsResult } from '../interfaces/Account';


@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private accountsQuery: QueryRef<{accounts: AccountsResult}>;

  constructor(private apollo: Apollo) {
    this.accountsQuery = this.apollo.watchQuery({
      query: gql`query {
        accounts {
            accounts {
                id
                name
                transactions {
                    id
                    accountId
                    amount
                    type
                }
                type
            }
        }
    }`
    });
  }

  async getAccounts(): Promise<AccountsResult> {
    const result = await this.accountsQuery.refetch();
    return result.data.accounts;
  }
}
