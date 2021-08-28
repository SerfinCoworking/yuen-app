import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { faEye, faPen } from "@fortawesome/free-solid-svg-icons";
import { Company } from "@shared/models/company";
import { JsonApiItem } from "../../../../shared/models/json-api";

@Component({
	selector: "app-show",
	templateUrl: "./show.component.html",
	styleUrls: ["./show.component.sass"]
})
export class ShowComponent implements OnInit {
	faEye = faEye;
	faPen = faPen;
	company: JsonApiItem<Company> = {} as JsonApiItem<Company>;
	editRoute = "";

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.company = data.company as JsonApiItem<Company>;
			this.editRoute = `/empresas/${this.company.data.id}/editar`;
		});
	}
}
