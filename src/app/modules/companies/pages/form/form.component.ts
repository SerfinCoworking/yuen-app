import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CompaniesService } from "@core/http/companies/companies.service";
import {
	faPen,
	faPlus,
	faSave,
	faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import { Company } from "@shared/models/company";
import { JsonApiItem } from "@shared/models/json-api";

@Component({
	selector: "app-form",
	templateUrl: "./form.component.html",
	styleUrls: ["./form.component.sass"]
})
export class FormComponent implements OnInit {
	faPen = faPen;
	faPlus = faPlus;
	faShoppingCart = faShoppingCart;
	faSave = faSave;

	isEdit = false;
	company: JsonApiItem<Company> = {} as JsonApiItem<Company>;
	companyForm: FormGroup = this.fBuilder.group({
		name: ["", [Validators.required]],
		web_page: [""],
		email: ["", [Validators.required, Validators.email]],
		address: [],
		phone: [""]
	});

	constructor(
		private activatedRoute: ActivatedRoute,
		private fBuilder: FormBuilder,
		private companiesService: CompaniesService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			if (data.company) {
				this.company = data.company as JsonApiItem<Company>;
				this.isEdit = true;
				this.companyForm.reset(this.company.data.attributes);
			}
		});
	}

	isInValid(field: string): boolean {
		return !!(
			this.companyForm.controls[field].errors &&
			this.companyForm.controls[field].touched
		);
	}

	submitCompanyForm(): void {
		if (this.isEdit) {
			this.companiesService
				.update(this.companyForm.value, this.company.data.id)
				.subscribe(() => {
					void this.router.navigate(["empresas"]);
				});
		} else {
			this.companiesService.create(this.companyForm.value).subscribe(() => {
				void this.router.navigate(["empresas"]);
			});
		}
	}
}
