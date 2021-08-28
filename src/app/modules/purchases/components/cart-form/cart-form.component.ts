import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { JsonApiList } from "@shared/models/json-api";
import { Product } from "@shared/models/product";
import { PurchaseProduct } from "@shared/models/purchase_product";
import { faCalendarAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-cart-form",
	templateUrl: "./cart-form.component.html",
	styleUrls: ["./cart-form.component.sass"]
})
export class CartFormComponent implements OnInit {
	@Input() purchaseProduct!: PurchaseProduct;
	@Input() lastInsert!: boolean;
	@Output() formTouched: EventEmitter<boolean> = new EventEmitter<boolean>();

	faCalendarAlt = faCalendarAlt;
	faTrashAlt = faTrashAlt;

	purchaseProductForm: FormGroup = this.fBuilder.group({
		purchase_id: [""],
		product_id: [""],
		quantity: [""],
		cost_price: [""],
		presentation: [""],
		expiry_date: [""]
	});

	products: JsonApiList<Product> = {} as JsonApiList<Product>;

	constructor(private fBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.purchaseProductForm.reset(this.purchaseProduct);
	}

	formTouch(): void {
		this.formTouched.emit(this.lastInsert);
	}
}
