import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "@core/http/products/products.service";
import { JsonApiList } from "@shared/models/json-api";
import { Product } from "@shared/models/product";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.sass"]
})
export class ListComponent implements OnInit {
	products: JsonApiList<Product> = {} as JsonApiList<Product>;
	constructor(
		private activatedRoute: ActivatedRoute,
		private productsService: ProductsService
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.products = data.products as JsonApiList<Product>;
		});
	}
	delete(id: number): void {
		this.productsService.delete(id).subscribe(() => {
			this.productsService.index().subscribe((res) => {
				this.products = res;
			});
		});
	}
}
