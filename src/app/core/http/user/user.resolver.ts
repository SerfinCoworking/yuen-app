import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "@core/http/user/user.service";
import { User } from "@shared/models/user";
import { JsonApiList } from "@shared/models/json-api";

@Injectable({
	providedIn: "root"
})
export class UserResolver implements Resolve<JsonApiList<User>> {
	constructor(private userService: UserService) {}

	resolve(): Observable<JsonApiList<User>> {
		return this.userService.index();
	}
}
