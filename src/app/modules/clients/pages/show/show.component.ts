import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { faPen, faEye } from "@fortawesome/free-solid-svg-icons";
import { Client } from "@shared/models/client";
import { JsonApiItem } from "../../../../shared/models/json-api";
@Component({
	selector: "app-show",
	templateUrl: "./show.component.html",
	styleUrls: ["./show.component.sass"]
})
export class ShowComponent implements OnInit {
	client: JsonApiItem<Client> = {} as JsonApiItem<Client>;
	faPen = faPen;
	faEye = faEye;
	editRoute = "";
	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			console.log(data.client);
			this.client = data.client as JsonApiItem<Client>;
		});
		this.editRoute = `/clientes/${this.client.data.id}/editar`;
	}
}
