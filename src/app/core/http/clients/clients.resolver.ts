import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Client } from "@shared/models/client";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";
import { Observable } from "rxjs";
import { ClientsService } from "./clients.service";

@Injectable({
	providedIn: "root"
})
export class ClientsResolver implements Resolve<JsonApiList<Client>> {
	constructor(private clientsService: ClientsService) {}

	resolve(): Observable<JsonApiList<Client>> {
		return this.clientsService.index();
	}
}

@Injectable({
	providedIn: "root"
})
export class ClientResolver implements Resolve<JsonApiItem<Client>> {
	constructor(private clientsService: ClientsService) {}
	resolve(route: ActivatedRouteSnapshot): Observable<JsonApiItem<Client>> {
		const { id } = route.params;
		return this.clientsService.show(id);
	}
}
