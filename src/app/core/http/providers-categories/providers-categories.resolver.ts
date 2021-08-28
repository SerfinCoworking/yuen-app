import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";
import { Category as ProvidersCategory } from "@shared/models/provider";
import { Observable } from "rxjs";
import { ProvidersCategoriesService } from "./providers-categories.service";

@Injectable({
	providedIn: "root"
})
export class ProvidersCategoriesResolver
	implements Resolve<JsonApiList<ProvidersCategory>> {
	constructor(private providersCategoriesService: ProvidersCategoriesService) {}
	resolve(): Observable<JsonApiList<ProvidersCategory>> {
		return this.providersCategoriesService.index();
	}
}

@Injectable({
	providedIn: "root"
})
export class ProvidersCategoryResolver
	implements Resolve<JsonApiItem<ProvidersCategory>> {
	constructor(private providersCategoriesService: ProvidersCategoriesService) {}
	resolve(
		route: ActivatedRouteSnapshot
	): Observable<JsonApiItem<ProvidersCategory>> {
		const { id } = route.params;
		return this.providersCategoriesService.show(id);
	}
}
