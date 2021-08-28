import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AccountType } from "@shared/models/account-type";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";
import { environment as env } from "@root/environments/environment";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class AccountsTypesService {
	constructor(private http: HttpClient) {}

	index(): Observable<JsonApiList<AccountType>> {
		return this.http.get<JsonApiList<AccountType>>(
			`${env.API_URL}/account_types`
		);
	}
	create(type: AccountType): Observable<AccountType> {
		return this.http.post<AccountType>(`${env.API_URL}/account_types`, {
			account_type: type
		});
	}

	update(type: AccountType, id: number): Observable<AccountType> {
		return this.http.patch<AccountType>(`${env.API_URL}/account_types/${id}`, {
			account_type: type
		});
	}

	show(id: number): Observable<JsonApiItem<AccountType>> {
		return this.http.get<JsonApiItem<AccountType>>(
			`${env.API_URL}/account_types/${id}`
		);
	}
	delete(id: number): Observable<AccountType> {
		return this.http.delete<AccountType>(`${env.API_URL}/account_types/${id}`);
	}
}
