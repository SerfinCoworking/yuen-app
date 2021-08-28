import { Product } from "./product";
import { Purchase } from "./purchase";

export interface PurchaseProduct {
	id?: number;
	name: string;
	purchase_id: number;
	purchase?: Purchase;
	product: Product;
	quantity: number;
	cost_price: number;
	total_line: number;
	expiry_date?: string;
	presentation: string;
}
