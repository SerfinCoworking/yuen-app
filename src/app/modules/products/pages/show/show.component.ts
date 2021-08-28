import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "@shared/models/product";
import { faPen, faEye } from "@fortawesome/free-solid-svg-icons";
import { JsonApiItem } from "@shared/models/json-api";
@Component({
	selector: "app-show",
	templateUrl: "./show.component.html",
	styleUrls: ["./show.component.sass"]
})
export class ShowComponent implements OnInit {
	product: JsonApiItem<Product> = {} as JsonApiItem<Product>;
	editRoute = "";
	faPen = faPen;
	faEye = faEye;
	constructor(private activatedRoute: ActivatedRoute) {}
	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.product = data.product as JsonApiItem<Product>;
		});
		this.editRoute = `/productos/${this.product.data.id}/editar`;
	}
}
