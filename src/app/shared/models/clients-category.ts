import { Company } from "./company";
export interface ClientsCategory {
	id?: number;
	company: Company;
	name: string;
	description: string;
}
