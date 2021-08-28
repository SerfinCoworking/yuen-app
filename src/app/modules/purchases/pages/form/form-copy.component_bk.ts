/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import {
	faPlus,
	faSave,
	faShoppingCart,
	faCalendarAlt,
	faPen,
	faTrash,
	faRedo,
	faSearch
} from "@fortawesome/free-solid-svg-icons";
import { PurchasesService } from "@core/http/purchases/purchases.service";
import { Provider } from "@shared/models/provider";
import { Purchase } from "@shared/models/purchase";
import { PurchaseProduct } from "../../../../shared/models/purchase_product";
import { Product } from "@shared/models/product";
import { PurchaseProductService } from "@core/http/purchase-product/purchase-product.service";
import { ProductsService } from "@core/http/products/products.service";
import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { JsonApi } from "@shared/models/json-api";

import { Component } from "@angular/core";

@Component({
	selector: "app-form",
	templateUrl: "./form.component.html",
	styleUrls: ["./form.component.sass"]
})
export class FormComponent {}
	faPlus = faPlus;
	faSearch = faSearch;
	faSave = faSave;
	faPen = faPen;
	faTrash = faTrash;
	faShoppingCart = faShoppingCart;
	faCalendarAlt = faCalendarAlt;
	faRedo = faRedo;

	isEdit = false;
	secondPart = false;
	alreadyCreated = false;

	providers: Provider[] = [];
	producstList: Product[] = [];
	productsOnList: PurchaseProduct[] = [];

	purchaseForm: FormGroup = this.fBuilder.group({
		provider_id: [0, [Validators.required, Validators.min(1)]],
		date: ["", [Validators.required]],
		reference_number: ["", [Validators.required, Validators.minLength(3)]]
	});
	productForm: FormGroup = this.fBuilder.group({
		product_id: [0, [Validators.required, Validators.min(1)]],
		cost_price: ["", [Validators.required]],
		quantity: ["", [Validators.required]],
		presentation: ["", [Validators.required]],
		expiry_date: [""]
	});
	arrayForm: FormGroup = this.fBuilder.group({
		purchasesProducts: this.fBuilder.array([])
	});

	product: PurchaseProduct = {} as PurchaseProduct;
	purchase: Purchase = {} as Purchase;

	constructor(
		private activatedRoute: ActivatedRoute,
		private fBuilder: FormBuilder,
		private purchasesService: PurchasesService,
		private purchaseProductService: PurchaseProductService,
		private productsService: ProductsService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.providers = data.providers as Provider[];
			this.producstList = data.products as Product[];
			if (data.purchase) {
				data.purchase.products.map((item: PurchaseProduct) => {
					this.addProduct(item);
				this.purchase = data.purchase as Purchase;
				this.isEdit = true;
				this.product.purchase.id = data.purchase.id;
				this.purchaseForm.reset(this.purchase);
			}
			)}
			this.purchaseForm.valueChanges.subscribe((form) => {
				const { provider_id, date, reference_number } = form as Purchase;
				this.purchase.provider_id = provider_id;
				this.purchase.date = date;
				this.purchase.reference_number = reference_number;
			});
			this.productForm.valueChanges.subscribe((form) => {
				const {
					product_id,
					cost_price,
					quantity,
					expiry_date,
					presentation
				} = form as PurchaseProduct;
				this.product.product.id = product_id;
				this.product.cost_price = cost_price;
				this.product.quantity = quantity;
				this.product.presentation = presentation;
				this.product.expiry_date = Object.values(expiry_date)
					.reverse()
					.join("/");
			});
		);
	}

	setDatePurchase(date: NgbDate): void {
		this.purchaseForm.controls["date"].setValue(
			Object.values(date).reverse().join("/")
		);
	}
	setDateProductsOnList(date: NgbDate, index: number): void {
		this.purchasesProducts.controls[index]
			.get("expiry_date")
			?.setValue(Object.values(date).reverse().join("/"));
	}

	createProductForm(values: JsonApi<PurchaseProduct>): FormGroup {
		if (values.expiry_date) {
			return this.fBuilder.group({
				id: [values.id],
				purchase_id: [values.purchase.id],
				product_id: [values.product.id.toString(), [Validators.required]],
				cost_price: [values.cost_price, [Validators.required]],
				quantity: [values.quantity, [Validators.required]],
				presentation: [values.presentation, [Validators.required]],
				expiry_date: [values.expiry_date],
				total_line: [values.total_line]
			});
		} else {
			return this.fBuilder.group({
				id: [values.id],
				purchase_id: [values.purchase.id],
				product_id: [values.product.id.toString(), [Validators.required]],
				cost_price: [values.cost_price, [Validators.required]],
				quantity: [values.quantity, [Validators.required]],
				presentation: [values.presentation, [Validators.required]],
				total_line: [values.total_line],
				expiry_date: [""]
			});
		}
	}

	patchRow(values: PurchaseProduct, index: number): void {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		this.purchasesProducts.value[index] = values;
	}
	get purchasesProducts(): FormArray {
		return this.arrayForm.get("purchasesProducts") as FormArray;
	}
	addProduct(product: JsonApi<PurchaseProduct>): void {
		this.purchasesProducts.push(this.createProductForm(product));
	}

	isInValid(field: string): boolean {
		return !!(
			this.purchaseForm.controls[field].errors &&
			this.purchaseForm.controls[field].touched
		);
	}
	invalidProductForm(field: string): boolean {
		return !!(
			this.productForm.controls[field].errors &&
			this.productForm.controls[field].touched
		);
	}
	invalidRow(field: string, index: number): boolean {
		return !!(
			this.purchasesProducts.controls[index].get(field)?.invalid &&
			this.purchasesProducts.controls[index].get(field)?.touched
		);
	}

	unCollapse(): void {
		this.secondPart = !this.secondPart;
	}

	submitPurchaseForm(): void {
		if (this.isEdit || this.alreadyCreated) {
			this.purchasesService
				.update(this.purchaseForm.value, this.purchase.id)
				.subscribe((res) => {
					// this.router.navigate(["/compras"]);
					// this.purchase = res.data.attributes;
					this.secondPart = true;
				});
		} else {
			this.purchasesService.create(this.purchase).subscribe((res) => {
				// this.router.navigate(["/compras"]);
				// this.purchase = res;
				this.product.purchase.id = res.data.id;
				this.secondPart = true;
				this.alreadyCreated = true;
			});
		}
	}
	submitProductForm(): void {
		this.purchaseProductService.create(this.product).subscribe(
			(res) => {
				this.addProduct(res);
				this.productsOnList.push(res);
			},
			() => {},
			() => {
				this.productForm.reset({ product_id: 0, expiry_date: "" });
			}
		);
	}

	updateProduct(index: number): void {
		const patchProduct: PurchaseProduct = this.purchasesProducts.value[index];
		this.purchaseProductService
			.update(patchProduct, patchProduct.id)
			.subscribe((res) => {
				this.productsOnList = this.productsOnList.map(
					(product: PurchaseProduct) => {
						if (product.id === res.id) {
							return res;
						} else {
							return product;
						}
					}
				);
				this.purchasesProducts.value[index] = res;
			});
	}

	deleteProduct(id: number, index: number): void {
		this.purchaseProductService.delete(id).subscribe(() => {
			this.purchasesProducts.removeAt(index);
		});
	}

	fields: { eng: string; esp: string }[] = [
		{ eng: "cost_price", esp: "Costo" },
		{ eng: "product_id", esp: "Nombre" },
		{ eng: "expiry_date", esp: "Rango de vencimiento" },
		{ eng: "quantity", esp: "Cantidad" },
		{ eng: "total_line", esp: "Costo total" }
	];

	searchForm: FormGroup = this.fBuilder.group({
		search: ["", [Validators.required]],
		field: ["product_id", [Validators.required]]
	});

	
	receive(): void {
		this.purchasesService.receive(this.purchase.id).subscribe((res) => {
			console.log("recibida compra", res);
		});
	}
}
