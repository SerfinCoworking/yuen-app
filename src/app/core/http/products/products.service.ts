import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment as env } from "@root/environments/environment";
import { Product } from "@shared/models/product";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";

@Injectable({
	providedIn: "root"
})
export class ProductsService {
	constructor(private http: HttpClient) {}
	productHeader = true;

	// LIST
	index(): Observable<JsonApiList<Product>> {
		let params = new HttpParams();
		params = params.append("scope", "index:products");
		return this.http.get<JsonApiList<Product>>(`${env.API_URL}/products`, {
			params: params
		});
	}

	create(product: Product): Observable<Product> {
		return this.http.post<Product>(`${env.API_URL}/products`, {
			product: product
		});
	}

	update(product: Product, id: number): Observable<Product> {
		return this.http.patch<Product>(`${env.API_URL}/products/${id}`, {
			product: product
		});
	}

	show(id: number): Observable<JsonApiItem<Product>> {
		return this.http.get<JsonApiItem<Product>>(`${env.API_URL}/products/${id}`);
	}
	delete(id: number): Observable<void> {
		return this.http.delete<void>(`${env.API_URL}/products/${id}`);
	}
}
