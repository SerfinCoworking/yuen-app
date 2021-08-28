import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";
import { Observable } from "rxjs";
import { PurchaseProduct } from "@shared/models/purchase_product";
import { environment as env } from "@root/environments/environment";

@Injectable({
	providedIn: "root"
})
export class PurchaseProductService {
	constructor(private http: HttpClient) {}

	index(): Observable<JsonApiList<PurchaseProduct>> {
		return this.http.get<JsonApiList<PurchaseProduct>>(
			`${env.API_URL}/purchase_products`
		);
	}

	create(purchaseProduct: PurchaseProduct): Observable<PurchaseProduct> {
		return this.http.post<PurchaseProduct>(`${env.API_URL}/purchase_products`, {
			purchase_product: purchaseProduct
		});
	}

	update(purchaseProduct: PurchaseProduct, id: number) {
		return this.http.patch<PurchaseProduct>(
			`${env.API_URL}/purchase_products/${id}`,
			{
				purchase_product: purchaseProduct
			}
		);
	}

	show(id: number): Observable<JsonApiItem<PurchaseProduct>> {
		return this.http.get<JsonApiItem<PurchaseProduct>>(
			`${env.API_URL}/purchase_products/${id}`
		);
	}

	delete(id: number) {
		return this.http.delete(`${env.API_URL}/purchase_products/${id}`);
	}
}
