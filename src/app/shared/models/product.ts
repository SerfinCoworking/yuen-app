import { Unity } from "./unity";

export interface CategoryType {
	name: string;
	value: string;
}
export interface Category {
	id?: number;
	parent_id: number;
	name: string;
}
export interface Product {
	id?: number;
	company_id: number;
	category_id: number;
	unity_id: number;
	name: string;
	quantity_per_unit: number;
	barcode: string;
	description?: string;
	category?: Category;
	unity?: Unity;
}
