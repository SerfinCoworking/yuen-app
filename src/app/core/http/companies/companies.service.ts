import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Company } from "@shared/models/company";
import { environment as env } from "@root/environments/environment";
import { Observable } from "rxjs";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";

@Injectable({
	providedIn: "root"
})
export class CompaniesService {
	constructor(private http: HttpClient) {}

	index(): Observable<JsonApiList<Company>> {
		return this.http.get<JsonApiList<Company>>(`${env.API_URL}/companies`);
	}

	create(company: Company): Observable<Company> {
		return this.http.post<Company>(`${env.API_URL}/companies`, {
			company: company
		});
	}

	update(company: Company, id: number): Observable<Company> {
		return this.http.patch<Company>(`${env.API_URL}/companies/${id}`, {
			company: company
		});
	}
	show(id: number): Observable<JsonApiItem<Company>> {
		return this.http.get<JsonApiItem<Company>>(
			`${env.API_URL}/companies/${id}`
		);
	}
	delete(id: number): Observable<Company> {
		return this.http.delete<Company>(`${env.API_URL}/companies/${id}`);
	}
}
