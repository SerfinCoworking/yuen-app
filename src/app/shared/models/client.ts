import { ClientsCategory } from "./clients-category";
import { Company } from "./company";

export interface Client {
	id?: number;
	category_id: number;
	company_id?: number;
	company: Company;
	first_name: string;
	last_name: string;
	email?: string;
	category: ClientsCategory;
	nickname?: string;
	address?: string;
	phone?: string;
	organization?: string;
	cuit?: string;
}
