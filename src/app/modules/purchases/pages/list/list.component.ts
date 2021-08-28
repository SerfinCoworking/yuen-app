import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PurchasesService } from "@core/http/purchases/purchases.service";
import { JsonApiList } from "@shared/models/json-api";
import { Purchase } from "@shared/models/purchase";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.sass"]
})
export class ListComponent implements OnInit {
	purchases: JsonApiList<Purchase> = {} as JsonApiList<Purchase>;

	constructor(
		private activatedRoute: ActivatedRoute,
		private purchasesService: PurchasesService
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.purchases = data.purchases as JsonApiList<Purchase>;
		});
	}

	delete(id: number) {
		this.purchasesService.delete(id).subscribe(() => {
			this.purchasesService.index().subscribe((res) => {
				this.purchases = res;
			});
		});
	}
}
