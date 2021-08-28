import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";
import { Product } from "@shared/models/product";
import { Observable } from "rxjs";
import { ProductsService } from "./products.service";

@Injectable({
	providedIn: "root"
})
export class ProductsResolver implements Resolve<JsonApiList<Product>> {
	constructor(private productsService: ProductsService) {}
	resolve(): Observable<JsonApiList<Product>> {
		return this.productsService.index();
	}
}
@Injectable({
	providedIn: "root"
})
export class ProductResolver implements Resolve<JsonApiItem<Product>> {
	constructor(private productsService: ProductsService) {}

	resolve(route: ActivatedRouteSnapshot): Observable<JsonApiItem<Product>> {
		const { id } = route.params;
		return this.productsService.show(id);
	}
}
