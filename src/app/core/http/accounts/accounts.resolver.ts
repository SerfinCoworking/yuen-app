import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Account } from "@shared/models/account";
import { AccountsService } from "./accounts.service";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";

@Injectable({
	providedIn: "root"
})
export class AccountsResolver implements Resolve<JsonApiList<Account>> {
	constructor(private accountsService: AccountsService) {}

	resolve(): Observable<JsonApiList<Account>> {
		return this.accountsService.index();
	}
}

@Injectable({
	providedIn: "root"
})
export class AccountResolver implements Resolve<JsonApiItem<Account>> {
	constructor(private accountsService: AccountsService) {}

	resolve(route: ActivatedRouteSnapshot): Observable<JsonApiItem<Account>> {
		const { id } = route.params;
		return this.accountsService.show(id);
	}
}
