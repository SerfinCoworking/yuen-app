import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ClientsService } from "@core/http/clients/clients.service";
import { faPlus, faSave, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Client } from "@shared/models/client";
import { ClientsCategory } from "@shared/models/clients-category";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";

@Component({
	selector: "app-form",
	templateUrl: "./form.component.html",
	styleUrls: ["./form.component.sass"]
})
export class FormComponent implements OnInit {
	isEdit = false;
	faPlus = faPlus;
	faSave = faSave;
	faUsers = faUsers;
	client: JsonApiItem<Client> = {} as JsonApiItem<Client>;
	categories: JsonApiList<ClientsCategory> = {} as JsonApiList<ClientsCategory>;
	clientForm: FormGroup = this.fBuilder.group({
		first_name: ["", [Validators.required, Validators.minLength(1)]],
		last_name: ["", [Validators.required, Validators.minLength(1)]],
		category_id: ["", [Validators.required, Validators.min(1)]],
		nickname: [""],
		email: [
			"",
			[Validators.required, Validators.minLength(1), Validators.email]
		],
		address: [""],
		phone: [""],
		organization: [""],
		cuit: [""]
	});

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private fBuilder: FormBuilder,
		private clientsService: ClientsService
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.categories = data.categories as JsonApiList<ClientsCategory>;
			if (data.client) {
				this.client = data.client as JsonApiItem<Client>;
				this.isEdit = true;
				this.clientForm.reset({
					...this.client.data.attributes,
					category_id: this.client.data.attributes.category.id?.toString()
				});
			}
		});
	}

	isInValid(field: string): boolean {
		return !!(
			this.clientForm.controls[field].invalid &&
			this.clientForm.controls[field].touched
		);
	}
	hasValue(field: string): boolean | undefined {
		return this.clientForm.get(field)?.valid;
	}
	submitClientForm(): void {
		if (this.isEdit) {
			this.clientsService
				.update(this.clientForm.value, this.client.data.id)
				.subscribe(() => {
					void this.router.navigate(["/clientes"]);
				});
		} else {
			this.clientsService.create(this.clientForm.value).subscribe(() => {
				void this.router.navigate(["/clientes"]);
			});
		}
	}
}
