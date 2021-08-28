import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProvidersCategoriesService } from "@core/http/providers-categories/providers-categories.service";
import {
	faSave,
	faPlus,
	faTruck,
	faPen
} from "@fortawesome/free-solid-svg-icons";
import { JsonApiItem } from "@shared/models/json-api";
import { Category as ProvidersCategory } from "@shared/models/provider";
@Component({
	selector: "app-form",
	templateUrl: "./form.component.html",
	styleUrls: ["./form.component.sass"]
})
export class FormComponent implements OnInit {
	faPlus = faPlus;
	faSave = faSave;
	faPen = faPen;
	faTruck = faTruck;
	isEdit = false;
	category: JsonApiItem<ProvidersCategory> = {} as JsonApiItem<ProvidersCategory>;
	providersCategoryForm: FormGroup = this.fBuilder.group({
		name: ["", Validators.required],
		description: [""]
	});

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private fBuilder: FormBuilder,
		private providersCategoriesService: ProvidersCategoriesService
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			if (data.providersCategory) {
				this.category = data.providersCategory as JsonApiItem<ProvidersCategory>;
				this.providersCategoryForm.reset(this.category.data.attributes);
				this.isEdit = true;
			}
		});
	}

	isInValid(field: string): boolean {
		return !!(
			this.providersCategoryForm.controls[field].errors &&
			this.providersCategoryForm.controls[field].touched
		);
	}

	submitProvidersCategoryForm(): void {
		if (this.isEdit) {
			this.providersCategoriesService
				.update(this.providersCategoryForm.value, this.category.data.id)
				.subscribe(
					() => {
						void this.router.navigate(["/proveedores/categorias"]);
					},
					() => {
						console.log("Error categoria producto");
					}
				);
		} else {
			this.providersCategoriesService
				.create(this.providersCategoryForm.value)
				.subscribe(
					() => {
						void this.router.navigate(["/proveedores/categorias"]);
					},
					() => {
						console.log("Error categoria producto");
					}
				);
		}
	}
}
