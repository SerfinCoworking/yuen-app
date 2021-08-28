import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { faShoppingCart, faSave } from "@fortawesome/free-solid-svg-icons";
import { JsonApiItem } from "@shared/models/json-api";
import { Purchase } from "@shared/models/purchase";
import { PurchaseProduct } from "@shared/models/purchase_product";

@Component({
	selector: "app-product-cart",
	templateUrl: "./product-cart.component.html",
	styleUrls: ["./product-cart.component.sass"]
})
export class ProductCartComponent implements OnInit {
	faShoppingCart = faShoppingCart;
	faSave = faSave;

	purchase: JsonApiItem<Purchase> = {} as JsonApiItem<Purchase>;

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.purchase = data.purchase as JsonApiItem<Purchase>;
			this.addProduct();
		});
	}

	addNewRow(event: boolean): void {
		if (event) this.addProduct();
		return;
	}

	private addProduct(): void {
		this.purchase.data.attributes.purchase_products.push({
			purchase_id: this.purchase.data.id
		} as PurchaseProduct);
	}
}
