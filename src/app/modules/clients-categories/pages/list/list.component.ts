import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClientsCategoriesService } from "@core/http/clients-categories/clients-categories.service";
import { ClientsCategory } from "@shared/models/clients-category";
import { JsonApiList } from "@shared/models/json-api";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.sass"]
})
export class ListComponent implements OnInit {
	clientsCategories: JsonApiList<ClientsCategory> = {} as JsonApiList<ClientsCategory>;

	constructor(
		private activatedRoute: ActivatedRoute,
		private clientsCategoriesService: ClientsCategoriesService
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.clientsCategories = data.clientsCategories as JsonApiList<ClientsCategory>;
		});
	}

	delete(id: number): void {
		this.clientsCategoriesService.delete(id).subscribe(() => {
			this.clientsCategoriesService.index().subscribe((res) => {
				this.clientsCategories = res;
			});
		});
	}
}
