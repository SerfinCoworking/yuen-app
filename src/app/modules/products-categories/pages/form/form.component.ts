import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsCategoriesService } from "@core/http/products-categories/products-categories.service";
import {
	faSave,
	faPlus,
	faClipboardList,
	faPen
} from "@fortawesome/free-solid-svg-icons";
import { JsonApiItem } from "@shared/models/json-api";
import { Category as ProductsCategory } from "@shared/models/product";

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
	productsCategory: JsonApiItem<ProductsCategory> = {} as JsonApiItem<ProductsCategory>;
	productsCategoryForm: FormGroup = this.fBuilder.group({
		name: ["", [Validators.required]]
	});

	constructor(
		private activatedRoute: ActivatedRoute,
		private fBuilder: FormBuilder,
		private productsCategoriesService: ProductsCategoriesService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			if (data.productsCategory) {
				this.isEdit = true;
				this.productsCategory = data.productsCategory as JsonApiItem<ProductsCategory>;
				this.productsCategoryForm.reset(this.productsCategory.data.attributes);
			}
		});
	}

	isInValid(field: string): boolean {
		return !!(
			this.productsCategoryForm.controls[field].errors &&
			this.productsCategoryForm.controls[field].touched
		);
	}

	submitProductsCategoryForm(): void {
		if (this.isEdit) {
			this.productsCategoriesService
				.update(this.productsCategoryForm.value, this.productsCategory.data.id)
				.subscribe(
					() => {
						this.router.navigate(["productos/categorias"]);
					},
					() => {
						console.log("ERROR en categoria producto");
					}
				);
		} else {
			this.productsCategoriesService
				.create(this.productsCategoryForm.value)
				.subscribe(
					() => {
						this.router.navigate(["productos/categorias"]);
					},
					() => {
						console.log("ERROR en categoria producto");
					}
				);
		}
	}
}
