import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@root/environments/environment";
import { Observable } from "rxjs";
import { User } from "@shared/models/user";
import { JsonApiList } from "@shared/models/json-api";

@Injectable({
	providedIn: "root"
})
export class UserService {
	constructor(private http: HttpClient) {}

	// LIST
	index(): Observable<JsonApiList<User>> {
		return this.http.get<JsonApiList<User>>(`${environment.API_URL}/users`);
	}
}
