import { Injectable } from "@angular/core";
import {
	Router,
	Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot
} from "@angular/router";
import { AccountType } from "@shared/models/account-type";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";
import { Observable, of } from "rxjs";
import { AccountsTypesService } from "./accounts-types.service";

@Injectable({
	providedIn: "root"
})
export class AccountsTypesResolver
	implements Resolve<JsonApiList<AccountType>> {
	constructor(private accountsTypesService: AccountsTypesService) {}
	resolve(): Observable<JsonApiList<AccountType>> {
		return this.accountsTypesService.index();
	}
}

@Injectable({
	providedIn: "root"
})
export class AccountsTypeResolver implements Resolve<JsonApiItem<AccountType>> {
	constructor(private accountsTypesService: AccountsTypesService) {}
	resolve(route: ActivatedRouteSnapshot): Observable<JsonApiItem<AccountType>> {
		const { id } = route.params;
		return this.accountsTypesService.show(id);
	}
}
