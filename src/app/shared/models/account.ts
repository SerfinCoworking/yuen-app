import { AccountType } from "./account-type";

export interface Account {
	id?: number;
	account_type_id: number;
	name: string;
	description: string;
	account_alias: string;
	cbu: number;
	balance: number;
	account_type?: AccountType;
}
