import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ClientsCategoriesService } from "@core/http/clients-categories/clients-categories.service";
import {
	faPen,
	faPlus,
	faSave,
	faUsers
} from "@fortawesome/free-solid-svg-icons";
import { ClientsCategory } from "@shared/models/clients-category";
import { JsonApiItem } from "@shared/models/json-api";

@Component({
	selector: "app-form",
	templateUrl: "./form.component.html",
	styleUrls: ["./form.component.sass"]
})
export class FormComponent implements OnInit {
	faPlus = faPlus;
	faSave = faSave;
	faPen = faPen;
	faUsers = faUsers;
	isEdit = false;
	category: JsonApiItem<ClientsCategory> = {} as JsonApiItem<ClientsCategory>;
	clientsCategoryForm: FormGroup = this.fBuilder.group({
		name: ["", Validators.required],
		description: [""]
	});
	constructor(
		private activatedRoute: ActivatedRoute,
		private fBuilder: FormBuilder,
		private clientsCategoriesService: ClientsCategoriesService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			if (data.clientCategory) {
				this.category = data.clientCategory as JsonApiItem<ClientsCategory>;
				this.isEdit = true;
				this.clientsCategoryForm.reset(this.category.data.attributes);
			}
		});
	}

	isInValid(field: string): boolean {
		return !!(
			this.clientsCategoryForm.controls[field].errors &&
			this.clientsCategoryForm.controls[field].touched
		);
	}

	submitClientsCategoryForm(): void {
		if (this.isEdit) {
			this.clientsCategoriesService
				.update(this.clientsCategoryForm.value, this.category.data.id)
				.subscribe(
					() => {
						void this.router.navigate(["/clientes/categorias"]);
					},
					() => {
						console.log("Error categoria cliente");
					}
				);
		} else {
			this.clientsCategoriesService
				.create(this.clientsCategoryForm.value)
				.subscribe(
					() => {
						void this.router.navigate(["/clientes/categorias"]);
					},
					() => {
						console.log("Error categoria cliente");
					}
				);
		}
	}
}
