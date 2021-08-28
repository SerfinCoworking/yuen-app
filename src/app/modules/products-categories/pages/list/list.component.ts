import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsCategoriesService } from "@core/http/products-categories/products-categories.service";
import { JsonApiList } from "@shared/models/json-api";
import { Category as ProductsCategory } from "@shared/models/product";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.sass"]
})
export class ListComponent implements OnInit {
	productsCategories: JsonApiList<ProductsCategory> = {} as JsonApiList<ProductsCategory>;

	constructor(
		private activatedRoute: ActivatedRoute,
		private productsCategoriesService: ProductsCategoriesService
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.productsCategories = data.productsCategories as JsonApiList<ProductsCategory>;
		});
	}

	delete(id: number) {
		this.productsCategoriesService.delete(id).subscribe(() => {
			this.productsCategoriesService.index().subscribe((res) => {
				this.productsCategories = res;
			});
		});
	}
}
