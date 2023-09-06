// write a Typescript account type which is the same as the account type defined on the server
// above was an attempt to get TabNine to generate code from natural language
import { Transaction } from "./Transaction";

export interface Account {
    id: string;
    name: string;
    password: string;
    email: string;
    transactions: Transaction[];
}

export interface AccountsResult {
    accounts: Account[];
    count: number;
}
