/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { faPen, faEye } from "@fortawesome/free-solid-svg-icons";
import { JsonApiItem } from "@shared/models/json-api";
import { Category } from "@shared/models/provider";

@Component({
	selector: "app-show",
	templateUrl: "./show.component.html",
	styleUrls: ["./show.component.sass"]
})
export class ShowComponent implements OnInit {
	faPen = faPen;
	faEye = faEye;
	editRoute = "";
	providersCategory: JsonApiItem<Category> = {} as JsonApiItem<Category>;
	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.providersCategory = data.providersCategory as JsonApiItem<Category>;
			this.editRoute = `/proveedores/categorias/${this.providersCategory.data.id}/editar`;
		});
	}
}
