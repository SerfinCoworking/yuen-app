import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Purchase } from "@shared/models/purchase";
import { environment as env } from "@root/environments/environment";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";

@Injectable({
	providedIn: "root"
})
export class PurchasesService {
	constructor(private http: HttpClient) {}

	index(): Observable<JsonApiList<Purchase>> {
		return this.http.get<JsonApiList<Purchase>>(`${env.API_URL}/purchases`);
	}
	create(purchase: Purchase): Observable<Purchase> {
		return this.http.post<Purchase>(`${env.API_URL}/purchases`, {
			purchase: purchase
		});
	}
	update(purchase: Purchase, id: number): Observable<Purchase> {
		return this.http.patch<Purchase>(`${env.API_URL}/purchases/${id}`, {
			purchase: purchase
		});
	}
	show(id: number): Observable<JsonApiItem<Purchase>> {
		return this.http.get<JsonApiItem<Purchase>>(
			`${env.API_URL}/purchases/${id}`
		);
	}
	delete(id: number): Observable<Purchase> {
		return this.http.delete<Purchase>(`${env.API_URL}/purchases/${id}`);
	}

	receive(id: number) {
		return this.http.get(`${env.API_URL}/purchases/${id}/receive`);
	}
}
