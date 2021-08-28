import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProvidersCategoriesService } from "@core/http/providers-categories/providers-categories.service";
import { JsonApiList } from "@shared/models/json-api";
import { Category as ProvidersCategory } from "@shared/models/provider";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.sass"]
})
export class ListComponent implements OnInit {
	providersCategories: JsonApiList<ProvidersCategory> = {} as JsonApiList<ProvidersCategory>;
	constructor(
		private activatedRoute: ActivatedRoute,
		private providersCategoriesService: ProvidersCategoriesService
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.providersCategories = data.providersCategories as JsonApiList<ProvidersCategory>;
		});
	}

	delete(id: number): void {
		this.providersCategoriesService.delete(id).subscribe(() => {
			this.providersCategoriesService.index().subscribe((res) => {
				this.providersCategories = res;
			});
		});
	}
}
