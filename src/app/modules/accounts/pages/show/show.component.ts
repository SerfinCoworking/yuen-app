import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { faEye, faPen } from "@fortawesome/free-solid-svg-icons";
import { JsonApiItem } from "@shared/models/json-api";

@Component({
	selector: "app-show",
	templateUrl: "./show.component.html",
	styleUrls: ["./show.component.sass"]
})
export class ShowComponent implements OnInit {
	account: JsonApiItem<Account> = {} as JsonApiItem<Account>;
	editRoute = "";
	faPen = faPen;
	faEye = faEye;

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.account = data.account as JsonApiItem<Account>;
		});
		this.editRoute = `/cuentas/${this.account.data.id}/editar`;
	}
}
