import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Category as ProductsCategory } from "@shared/models/product";
import { faPen, faEye } from "@fortawesome/free-solid-svg-icons";
import { JsonApiItem } from "@shared/models/json-api";

@Component({
	selector: "app-show",
	templateUrl: "./show.component.html",
	styleUrls: ["./show.component.sass"]
})
export class ShowComponent implements OnInit {
	faPen = faPen;
	faEye = faEye;
	productsCategory: JsonApiItem<ProductsCategory> = {} as JsonApiItem<ProductsCategory>;
	editRoute = "";

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.productsCategory = data.productsCategory as JsonApiItem<ProductsCategory>;
			this.editRoute = `/categoria_productos/${this.productsCategory.data.id}/editar`;
		});
	}
}
