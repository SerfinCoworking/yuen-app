import { Company } from "./company";

export interface Category {
	id?: number;
	company: Company;
	name: string;
	description: string;
}
export interface Provider {
	id?: number;
	company_id: number;
	category_id: number;
	company: Company;
	name: string;
	category: Category;
	email: string;
	webpage: string;
	address: string;
	phone: string;
	cuit: string;
}
