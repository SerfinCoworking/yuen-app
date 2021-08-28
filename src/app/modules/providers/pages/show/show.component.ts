/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Provider } from "@shared/models/provider";
import { faEye, faPen } from "@fortawesome/free-solid-svg-icons";
import { JsonApiItem } from "../../../../shared/models/json-api";

@Component({
	selector: "app-show",
	templateUrl: "./show.component.html",
	styleUrls: ["./show.component.sass"]
})
export class ShowComponent implements OnInit {
	faEye = faEye;
	faPen = faPen;
	provider: JsonApiItem<Provider> = {} as JsonApiItem<Provider>;
	editRoute = "";
	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.provider = data.provider as JsonApiItem<Provider>;
			this.editRoute = `/proveedores/${this.provider.data.id}/editar`;
		});
	}
}
