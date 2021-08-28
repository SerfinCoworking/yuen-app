import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment as env } from "@root/environments/environment";
import { Provider } from "@shared/models/provider";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";

@Injectable({
	providedIn: "root"
})
export class ProvidersService {
	constructor(private http: HttpClient) {}

	index(): Observable<JsonApiList<Provider>> {
		return this.http.get<JsonApiList<Provider>>(`${env.API_URL}/providers`);
	}

	create(provider: Provider): Observable<Provider> {
		return this.http.post<Provider>(`${env.API_URL}/providers`, {
			provider: provider
		});
	}
	update(provider: Provider, id: number) {
		return this.http.patch<Provider>(`${env.API_URL}/providers/${id}`, {
			provider: provider
		});
	}
	show(id: number): Observable<JsonApiItem<Provider>> {
		return this.http.get<JsonApiItem<Provider>>(
			`${env.API_URL}/providers/${id}`
		);
	}
	delete(id: number): Observable<Provider> {
		return this.http.delete<Provider>(`${env.API_URL}/providers/${id}`);
	}
}
