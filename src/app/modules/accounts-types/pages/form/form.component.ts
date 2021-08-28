import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountsTypesService } from "@core/http/accounts-types/accounts-types.service";
import {
	faClipboardList,
	faPen,
	faPlus,
	faSave
} from "@fortawesome/free-solid-svg-icons";
import { AccountType } from "@shared/models/account-type";
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
	faClipboardList = faClipboardList;
	isEdit = false;

	accountsType: JsonApiItem<AccountType> = {} as JsonApiItem<AccountType>;
	accountsTypeForm: FormGroup = this.fBuilder.group({
		name: ["", [Validators.required]]
	});

	constructor(
		private activatedRoute: ActivatedRoute,
		private fBuilder: FormBuilder,
		private accountsTypesService: AccountsTypesService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			if (data.accountsType) {
				this.isEdit = true;
				this.accountsType = data.accountsType as JsonApiItem<AccountType>;
				this.accountsTypeForm.reset(this.accountsType);
			}
		});
	}

	isInValid(field: string): boolean {
		return !!(
			this.accountsTypeForm.controls[field].errors &&
			this.accountsTypeForm.controls[field].touched
		);
	}

	submitAccountsTypeForm(): void {
		if (this.isEdit) {
			this.accountsTypesService
				.update(this.accountsTypeForm.value, this.accountsType.data.id)
				.subscribe(
					() => {
						this.router.navigate(["cuentas/tipos"]);
					},
					() => {
						console.log("ERROR en tipo de cuenta");
					}
				);
		} else {
			this.accountsTypesService.create(this.accountsTypeForm.value).subscribe(
				(res) => {
					console.log(res, "from account type");
					// this.router.navigate(["cuentas/tipos"]);
				},
				(err) => {
					console.log(err, "ERROR en tipo de cuenta");
				}
			);
		}
	}
}
