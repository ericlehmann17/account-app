// write a Typescript account type which is the same as the account type defined on the server
// above was an attempt to get TabNine to generate code from natural language
import { AccountType } from "./AccountType";

export interface Account {
    id: string;
    name: string;
    password: string;
    email: string;
    type: AccountType;
}

export interface AccountsResult {
    accounts: Account[];
    count: number;
}
