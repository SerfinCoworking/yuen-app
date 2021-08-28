import { Injectable } from "@angular/core";
import { Account } from "@shared/models/account";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment as env } from "@root/environments/environment";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";

@Injectable({
	providedIn: "root"
})
export class AccountsService {
	constructor(private http: HttpClient) {}

	index(): Observable<JsonApiList<Account>> {
		return this.http.get<JsonApiList<Account>>(`${env.API_URL}/accounts`);
	}

	create(account: Account): Observable<Account> {
		return this.http.post<Account>(`${env.API_URL}/accounts`, {
			account: account
		});
	}

	update(account: Account, id: number): Observable<Account> {
		return this.http.patch<Account>(`${env.API_URL}/accounts/${id}`, {
			account: account
		});
	}

	show(id: number): Observable<JsonApiItem<Account>> {
		return this.http.get<JsonApiItem<Account>>(`${env.API_URL}/accounts/${id}`);
	}

	delete(id: number): Observable<Account> {
		return this.http.delete<Account>(`${env.API_URL}/accounts/${id}`);
	}
}
