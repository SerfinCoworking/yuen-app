import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { ClientsCategory } from "@shared/models/clients-category";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";
import { Observable } from "rxjs";
import { ClientsCategoriesService } from "./clients-categories.service";

@Injectable({
	providedIn: "root"
})
export class ClientsCategoriesResolver
	implements Resolve<JsonApiList<ClientsCategory>> {
	constructor(private clientsCategoriesService: ClientsCategoriesService) {}
	resolve(): Observable<JsonApiList<ClientsCategory>> {
		return this.clientsCategoriesService.index();
	}
}

@Injectable({
	providedIn: "root"
})
export class ClientsCategoryResolver
	implements Resolve<JsonApiItem<ClientsCategory>> {
	constructor(private clientsCategoriesService: ClientsCategoriesService) {}
	resolve(
		route: ActivatedRouteSnapshot
	): Observable<JsonApiItem<ClientsCategory>> {
		const { id } = route.params;
		return this.clientsCategoriesService.show(id);
	}
}
