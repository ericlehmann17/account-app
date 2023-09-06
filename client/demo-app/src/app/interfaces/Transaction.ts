import { TransactionType } from "./TransactionType";

export interface Transaction {
    id: string;
    accountId: string;
    amount: number;
    date: Date;
    type: TransactionType;
}

export interface TransactionsResponse {
    transactions: Transaction[];
    count: number;
}