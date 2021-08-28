import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";
import { Category as ProductsCategory } from "@shared/models/product";
import { Observable } from "rxjs";
import { ProductsCategoriesService } from "./products-categories.service";

@Injectable({
	providedIn: "root"
})
export class ProductsCategoriesResolver
	implements Resolve<JsonApiList<ProductsCategory>> {
	constructor(private productsCategoriesService: ProductsCategoriesService) {}

	resolve(): Observable<JsonApiList<ProductsCategory>> {
		return this.productsCategoriesService.index();
	}
}

@Injectable({
	providedIn: "root"
})
export class ProductsCategoryResolver
	implements Resolve<JsonApiItem<ProductsCategory>> {
	constructor(private productsCategoriesService: ProductsCategoriesService) {}
	resolve(
		route: ActivatedRouteSnapshot
	): Observable<JsonApiItem<ProductsCategory>> {
		const { id } = route.params;
		return this.productsCategoriesService.show(id);
	}
}
