import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ClientsCategory } from "../../../shared/models/clients-category";
import { environment as env } from "@root/environments/environment";
import { Observable } from "rxjs";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";

@Injectable({
	providedIn: "root"
})
export class ClientsCategoriesService {
	constructor(private http: HttpClient) {}

	index(): Observable<JsonApiList<ClientsCategory>> {
		return this.http.get<JsonApiList<ClientsCategory>>(
			`${env.API_URL}/customers/categories`
		);
	}

	create(category: ClientsCategory): Observable<ClientsCategory> {
		return this.http.post<ClientsCategory>(
			`${env.API_URL}/customers/categories`,
			{ customer_category: category }
		);
	}
	update(category: ClientsCategory, id: number): Observable<ClientsCategory> {
		return this.http.patch<ClientsCategory>(
			`${env.API_URL}/customers/categories/${id}`,
			{ customer_category: category }
		);
	}
	show(id: number): Observable<JsonApiItem<ClientsCategory>> {
		return this.http.get<JsonApiItem<ClientsCategory>>(
			`${env.API_URL}/customers/categories/${id}`
		);
	}
	delete(id: number): Observable<ClientsCategory> {
		return this.http.delete<ClientsCategory>(
			`${env.API_URL}/customers/categories/${id}`
		);
	}
}
