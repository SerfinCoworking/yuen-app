import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";
import { PurchaseProduct } from "@shared/models/purchase_product";
import { Observable } from "rxjs";
import { PurchaseProductService } from "./purchase-product.service";

@Injectable({
	providedIn: "root"
})
export class PurchaseProductsResolver
	implements Resolve<JsonApiList<PurchaseProduct>> {
	constructor(private purchaseProductService: PurchaseProductService) {}

	resolve(): Observable<JsonApiList<PurchaseProduct>> {
		return this.purchaseProductService.index();
	}
}

@Injectable({
	providedIn: "root"
})
export class PurchaseProductResolver
	implements Resolve<JsonApiItem<PurchaseProduct>> {
	constructor(private purchaseProductService: PurchaseProductService) {}

	resolve(
		route: ActivatedRouteSnapshot
	): Observable<JsonApiItem<PurchaseProduct>> {
		const { id } = route.params;
		return this.purchaseProductService.show(id);
	}
}
