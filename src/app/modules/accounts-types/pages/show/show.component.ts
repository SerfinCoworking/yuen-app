import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { faEye, faPen } from "@fortawesome/free-solid-svg-icons";
import { AccountType } from "@shared/models/account-type";
import { JsonApiItem } from "@shared/models/json-api";

@Component({
	selector: "app-show",
	templateUrl: "./show.component.html",
	styleUrls: ["./show.component.sass"]
})
export class ShowComponent implements OnInit {
	faPen = faPen;
	faEye = faEye;
	accountsType: JsonApiItem<AccountType> = {} as JsonApiItem<AccountType>;
	editRoute = "";

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.accountsType = data.accountsType as JsonApiItem<AccountType>;
			console.log(this.accountsType);
			this.editRoute = `/cuentas/tipos/${this.accountsType.data.id}/editar`;
		});
	}
}
