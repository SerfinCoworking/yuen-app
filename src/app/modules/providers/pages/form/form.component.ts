import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProvidersService } from "@core/http/providers/providers.service";
import {
	faPlus,
	faPen,
	faSave,
	faTruck
} from "@fortawesome/free-solid-svg-icons";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";
import { Provider, Category } from "@shared/models/provider";

@Component({
	selector: "app-form",
	templateUrl: "./form.component.html",
	styleUrls: ["./form.component.sass"]
})
export class FormComponent implements OnInit {
	faPlus = faPlus;
	faPen = faPen;
	faSave = faSave;
	faTruck = faTruck;

	isEdit = false;
	categories: JsonApiList<Category> = {} as JsonApiList<Category>;
	provider: JsonApiItem<Provider> = {} as JsonApiItem<Provider>;
	providerForm: FormGroup = this.fBuilder.group({
		name: ["", [Validators.required, Validators.minLength(2)]],
		category_id: ["", [Validators.required]],
		email: ["", [Validators.required, Validators.email]],
		webpage: [""],
		address: [""],
		phone: [""],
		cuit: [""]
	});
	constructor(
		private activatedRoute: ActivatedRoute,
		private providersService: ProvidersService,
		private fBuilder: FormBuilder,
		private router: Router
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.categories = data.categories as JsonApiList<Category>;
			if (data.provider) {
				this.provider = data.provider as JsonApiItem<Provider>;
				this.isEdit = true;
				this.providerForm.reset({
					...this.provider.data.attributes,
					category_id: this.provider.data.attributes.category.id?.toString()
				});
			}
		});
	}

	isInValid(field: string): boolean {
		return !!(
			this.providerForm.controls[field].invalid &&
			this.providerForm.controls[field].touched
		);
	}
	hasValue(field: string): boolean | undefined {
		return this.providerForm.get(field)?.valid;
	}
	submitProviderForm(): void {
		if (this.isEdit) {
			this.providersService
				.update(this.providerForm.value, this.provider.data.id)
				.subscribe(
					() => {
						void this.router.navigate(["proveedores"]);
					},
					() => {
						console.log("Error Proveedores");
					}
				);
		} else {
			this.providersService.create(this.providerForm.value).subscribe(
				() => {
					void this.router.navigate(["proveedores"]);
				},
				() => {
					console.log("Error Proveedores");
				}
			);
		}
	}
}
