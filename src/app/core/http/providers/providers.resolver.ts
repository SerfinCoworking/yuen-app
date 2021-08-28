import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";
import { Observable } from "rxjs";
import { Provider } from "../../../shared/models/provider";
import { ProvidersService } from "./providers.service";

@Injectable({
	providedIn: "root"
})
export class ProvidersResolver implements Resolve<JsonApiList<Provider>> {
	constructor(private providersService: ProvidersService) {}

	resolve(): Observable<JsonApiList<Provider>> {
		return this.providersService.index();
	}
}

@Injectable({
	providedIn: "root"
})
export class ProviderResolver implements Resolve<JsonApiItem<Provider>> {
	constructor(private providersService: ProvidersService) {}

	resolve(route: ActivatedRouteSnapshot): Observable<JsonApiItem<Provider>> {
		const { id } = route.params;
		return this.providersService.show(id);
	}
}
