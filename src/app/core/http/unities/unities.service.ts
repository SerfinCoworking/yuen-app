import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Unity } from "@shared/models/unity";
import { Observable } from "rxjs";
import { environment as env } from "@root/environments/environment";
import { JsonApiList } from "@shared/models/json-api";

@Injectable({
	providedIn: "root"
})
export class UnitiesService {
	constructor(private http: HttpClient) {}
	index(): Observable<JsonApiList<Unity>> {
		return this.http.get<JsonApiList<Unity>>(`${env.API_URL}/unities`);
	}
}
