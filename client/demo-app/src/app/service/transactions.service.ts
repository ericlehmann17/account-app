import { Injectable } from '@angular/core';
import { TransactionsResult } from '../interfaces/Transaction';
import { Apollo, QueryRef, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private transactionsQuery: QueryRef<{transactions: TransactionsResult}, {account_id: number}>
  constructor(private apollo: Apollo) {
    this.transactionsQuery = this.apollo.watchQuery({
      query: gql`
        query transactions($account_id: Int!) {
          transactions(account_id: $account_id) {
            transactions {
              transaction_id,
              account_id,
              date,
              amount,
              transaction_type
            }
          }
        }`
    });
  }

  async getTransactions(account_id: number) {
    const result = await this.transactionsQuery.refetch({account_id});
    return result.data.transactions;
  }
}
