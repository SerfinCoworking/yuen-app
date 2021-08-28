import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountsService } from "@core/http/accounts/accounts.service";
import {
	faPlus,
	faCalculator,
	faPen,
	faBoxes,
	faSave
} from "@fortawesome/free-solid-svg-icons";
import { AccountType } from "@shared/models/account-type";
import { Account } from "@shared/models/account";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";

@Component({
	selector: "app-form",
	templateUrl: "./form.component.html",
	styles: []
})
export class FormComponent implements OnInit {
	faCalculator = faCalculator;
	faPen = faPen;
	faPlus = faPlus;
	faBoxes = faBoxes;
	faSave = faSave;

	isEdit = false;
	account_types: JsonApiList<AccountType> = {} as JsonApiList<AccountType>;
	account: JsonApiItem<Account> = {} as JsonApiItem<Account>;

	accountForm: FormGroup = this.fBuilder.group({
		account_alias: "",
		cbu: ["", [Validators.minLength(2), Validators.maxLength(22)]],
		account_type_id: ["", [Validators.minLength(2), Validators.required]],
		name: ["", [Validators.minLength(4), Validators.required]],
		description: ["", [Validators.minLength(4)]],
		balance: ["", [Validators.min(1), Validators.required]]
	});

	constructor(
		private fBuilder: FormBuilder,
		private accountsService: AccountsService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.account_types = data.types as JsonApiList<AccountType>;

			if (data.account) {
				this.isEdit = true;
				this.account = data.account as JsonApiItem<Account>;
				this.accountForm.reset({
					...this.account.data.attributes,
					account_type_id: this.account.data.attributes.account_type_id.toString()
				});
			}
		});
	}

	isInValid(field: string): boolean {
		return !!(
			this.accountForm.controls[field].errors &&
			this.accountForm.controls[field].touched
		);
	}

	hasValue(field: string): boolean | undefined {
		return this.accountForm.get(field)?.valid;
	}

	submitAccountForm(): void {
		if (this.isEdit) {
			this.accountsService
				.update(this.accountForm.value, this.account.data.id)
				.subscribe(
					() => {
						this.router.navigate(["cuentas"]);
					},
					() => {
						this.router.navigate(["cuentas"]);
					}
				);
		} else {
			this.accountsService.create(this.accountForm.value).subscribe((res) => {
				console.log(res, "from account");
				this.router.navigate(["cuentas"]);
			});
		}
	}
}
