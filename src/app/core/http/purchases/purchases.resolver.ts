import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";
import { Purchase } from "@shared/models/purchase";
import { Observable } from "rxjs";
import { PurchasesService } from "./purchases.service";

@Injectable({
	providedIn: "root"
})
export class PurchasesResolver implements Resolve<JsonApiList<Purchase>> {
	constructor(private purchasesService: PurchasesService) {}

	resolve(): Observable<JsonApiList<Purchase>> {
		return this.purchasesService.index();
	}
}

@Injectable({
	providedIn: "root"
})
export class PurchaseResolver implements Resolve<JsonApiItem<Purchase>> {
	constructor(private PurchasesService: PurchasesService) {}
	resolve(route: ActivatedRouteSnapshot): Observable<JsonApiItem<Purchase>> {
		const { id } = route.params;
		return this.PurchasesService.show(id);
	}
}
