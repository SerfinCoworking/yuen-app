import { PurchaseProduct } from "./purchase_product";

export interface Purchase {
	id?: number;
	provider_id: number;
	provider_name: string;
	company_id: number;
	request_date: string;
	reference_number: number;
	purchase_products: PurchaseProduct[];
}
