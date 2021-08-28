import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Company } from "@shared/models/company";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";
import { Observable } from "rxjs";
import { CompaniesService } from "./companies.service";

@Injectable({
	providedIn: "root"
})
export class CompaniesResolver implements Resolve<JsonApiList<Company>> {
	constructor(private companiesService: CompaniesService) {}

	resolve(): Observable<JsonApiList<Company>> {
		return this.companiesService.index();
	}
}

@Injectable({
	providedIn: "root"
})
export class CompanyResolver implements Resolve<JsonApiItem<Company>> {
	constructor(private companiesService: CompaniesService) {}

	resolve(route: ActivatedRouteSnapshot): Observable<JsonApiItem<Company>> {
		const { id } = route.params;
		return this.companiesService.show(id);
	}
}
