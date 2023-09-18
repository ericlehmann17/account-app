import { TransactionType } from "./TransactionType";

export interface Transaction {
    transaction_id: string;
    account_id: string;
    amount: number;
    date: Date;
    transaction_type: TransactionType;
}

export interface TransactionsResponse {
    transactions: Transaction[];
    count: number;
}