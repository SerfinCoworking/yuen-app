import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Client } from "../../../shared/models/client";
import { environment as env } from "@root/environments/environment";
import { Observable } from "rxjs";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";

@Injectable({
	providedIn: "root"
})
export class ClientsService {
	constructor(private http: HttpClient) {}

	index(): Observable<JsonApiList<Client>> {
		return this.http.get<JsonApiList<Client>>(`${env.API_URL}/customers`);
	}
	create(client: Client): Observable<Client> {
		return this.http.post<Client>(`${env.API_URL}/customers`, {
			customer: client
		});
	}
	update(client: Client, id: number): Observable<Client> {
		return this.http.patch<Client>(`${env.API_URL}/customers/${id}`, {
			customer: client
		});
	}

	show(id: number): Observable<JsonApiItem<Client>> {
		return this.http.get<JsonApiItem<Client>>(`${env.API_URL}/customers/${id}`);
	}
	delete(id: number): Observable<Client> {
		return this.http.delete<Client>(`${env.API_URL}/customers/${id}`);
	}
}
