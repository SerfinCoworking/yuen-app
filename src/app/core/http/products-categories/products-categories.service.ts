import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category as ProductsCategory } from "@shared/models/product";
import { environment as env } from "@root/environments/environment";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";

@Injectable({
	providedIn: "root"
})
export class ProductsCategoriesService {
	constructor(private http: HttpClient) {}

	index(): Observable<JsonApiList<ProductsCategory>> {
		return this.http.get<JsonApiList<ProductsCategory>>(
			`${env.API_URL}/products/categories`
		);
	}
	create(productsCategory: ProductsCategory) {
		return this.http.post<any>(`${env.API_URL}/products/categories`, {
			product_category: productsCategory
		});
	}

	update(productsCategory: ProductsCategory, id: number) {
		return this.http.patch<ProductsCategory>(
			`${env.API_URL}/products/categories/${id}`,
			{ product_category: productsCategory }
		);
	}
	show(id: number): Observable<JsonApiItem<ProductsCategory>> {
		return this.http.get<JsonApiItem<ProductsCategory>>(
			`${env.API_URL}/products/categories/${id}`
		);
	}
	delete(id: number) {
		return this.http.delete<ProductsCategory>(
			`${env.API_URL}/products/categories/${id}`
		);
	}
}
