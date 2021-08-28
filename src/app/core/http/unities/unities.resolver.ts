import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { JsonApiList } from "@shared/models/json-api";
import { Unity } from "@shared/models/unity";
import { Observable } from "rxjs";
import { UnitiesService } from "./unities.service";

@Injectable({
	providedIn: "root"
})
export class UnitiesResolver implements Resolve<JsonApiList<Unity>> {
	constructor(private unitiesService: UnitiesService) {}
	resolve(): Observable<JsonApiList<Unity>> {
		return this.unitiesService.index();
	}
}
