import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClientsCategory } from "@shared/models/clients-category";
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
	editRoute = "";
	clientsCategory: JsonApiItem<ClientsCategory> = {} as JsonApiItem<ClientsCategory>;
	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.clientsCategory = data.clientCategory as JsonApiItem<ClientsCategory>;
			this.editRoute = `/clientes/categorias/${this.clientsCategory.data.id}/editar`;
		});
	}
}
