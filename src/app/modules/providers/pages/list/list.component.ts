import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProvidersService } from "@core/http/providers/providers.service";
import { JsonApiList } from "@shared/models/json-api";
import { Provider } from "@shared/models/provider";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.sass"]
})
export class ListComponent implements OnInit {
	providers: JsonApiList<Provider> = {} as JsonApiList<Provider>;

	constructor(
		private activatedRoute: ActivatedRoute,
		private providersService: ProvidersService
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.providers = data.providers as JsonApiList<Provider>;
		});
	}

	delete(id: number): void {
		this.providersService.delete(id).subscribe(() => {
			this.providersService.index().subscribe((res) => {
				this.providers = res;
			});
		});
	}
}
