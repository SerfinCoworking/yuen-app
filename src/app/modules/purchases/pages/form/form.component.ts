import { Component, OnInit } from "@angular/core";
import {
	AbstractControl,
	FormBuilder,
	FormGroup,
	Validators
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import {
	faPlus,
	faSave,
	faCalendarAlt,
	faPen,
	faTrash,
	faSearch,
	faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import { PurchasesService } from "@core/http/purchases/purchases.service";
import { Provider } from "@shared/models/provider";
import { Purchase } from "@shared/models/purchase";
import { NgbCalendar } from "@ng-bootstrap/ng-bootstrap";
import { JsonApiItem, JsonApiList } from "@shared/models/json-api";

@Component({
	selector: "app-form",
	templateUrl: "./form.component.html",
	styleUrls: ["./form.component.sass"]
})
export class FormComponent implements OnInit {
	faPlus = faPlus;
	faSearch = faSearch;
	faSave = faSave;
	faPen = faPen;
	faTrash = faTrash;
	faCalendarAlt = faCalendarAlt;
	faShoppingCart = faShoppingCart;

	isEdit = false;

	providers: JsonApiList<Provider> = {} as JsonApiList<Provider>;
	date: { year: number; month: number } = this.calendar.getToday();

	purchaseForm: FormGroup = this.fBuilder.group({
		provider_id: ["", [Validators.required]],
		request_date: ["", [Validators.required]],
		reference_number: ["", [Validators.required, Validators.minLength(3)]]
	});

	purchase: JsonApiItem<Purchase> = {} as JsonApiItem<Purchase>;

	constructor(
		private activatedRoute: ActivatedRoute,
		private fBuilder: FormBuilder,
		private purchasesService: PurchasesService,
		private calendar: NgbCalendar
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.providers = data.providers as JsonApiList<Provider>;

			if (data.purchase) {
				this.purchase = data.purchase as JsonApiItem<Purchase>;
				this.isEdit = true;
				this.purchaseForm.reset({
					...this.purchase.data.attributes,
					provider_id: this.purchase.data.attributes.provider_id.toString()
				});
			}
		});

		this.purchaseForm.valueChanges.subscribe(console.log);
	}

	isInValid(field: string): boolean {
		return !!(
			this.purchaseForm.controls[field].errors &&
			this.purchaseForm.controls[field].touched
		);
	}

	hasValue(field: string): boolean | undefined {
		return this.purchaseForm.get(field)?.valid;
	}

	submitPurchaseForm(): void {
		this.purchasesService.create(this.purchaseForm.value).subscribe((res) => {
			console.log(res);
		});
	}

	get request_date(): AbstractControl | null {
		return this.purchaseForm.get("request_date");
	}
}
