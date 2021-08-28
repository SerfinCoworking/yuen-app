import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment as env } from "@root/environments/environment";
import { Category as ProvidersCategory } from "@shared/models/provider";
import { Observable } from "rxjs";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";

@Injectable({
	providedIn: "root"
})
export class ProvidersCategoriesService {
	constructor(private http: HttpClient) {}

	index(): Observable<JsonApiList<ProvidersCategory>> {
		return this.http.get<JsonApiList<ProvidersCategory>>(
			`${env.API_URL}/providers/categories`
		);
	}

	create(category: ProvidersCategory): Observable<ProvidersCategory> {
		return this.http.post<ProvidersCategory>(
			`${env.API_URL}/providers/categories`,
			{ provider_category: category }
		);
	}

	update(
		category: ProvidersCategory,
		id: number
	): Observable<ProvidersCategory> {
		return this.http.patch<ProvidersCategory>(
			`${env.API_URL}/providers/categories/${id}`,
			{ provider_category: category }
		);
	}

	show(id: number): Observable<JsonApiItem<ProvidersCategory>> {
		return this.http.get<JsonApiItem<ProvidersCategory>>(
			`${env.API_URL}/providers/categories/${id}`
		);
	}
	delete(id: number): Observable<ProvidersCategory> {
		return this.http.delete<ProvidersCategory>(
			`${env.API_URL}/providers/categories/${id}`
		);
	}
}
