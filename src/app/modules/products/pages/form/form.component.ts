import { Component, OnInit } from "@angular/core";
import {
	faPlus,
	faBoxes,
	faSave,
	faPen
} from "@fortawesome/free-solid-svg-icons";
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators
} from "@angular/forms";
import { ProductsService } from "@core/http/products/products.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Product, Category, CategoryType } from "@shared/models/product";
import { Unity } from "@shared/models/unity";
import { JsonApiList, JsonApiItem, JsonApiData } from "@shared/models/json-api";

@Component({
	selector: "app-form",
	templateUrl: "./form.component.html",
	styleUrls: ["./form.component.sass"]
})
export class FormComponent implements OnInit {
	faPlus = faPlus;
	faPen = faPen;
	faBoxes = faBoxes;
	faSave = faSave;

	productForm: FormGroup = this.fBuilder.group({
		id: [""],
		name: ["", Validators.required],
		category_id: ["", [Validators.required, Validators.min(1)]],
		unity_id: ["", Validators.required],
		quantity_per_unit: ["", Validators.required],
		barcode: ["", Validators.required],
		description: [""]
	});

	unitySelection: FormControl = this.fBuilder.control(
		"capacity",
		Validators.required
	);

	product: JsonApiItem<Product> = {} as JsonApiItem<Product>;
	categories: JsonApiList<Category> = {} as JsonApiList<Category>;
	unities: JsonApiList<Unity> = {} as JsonApiList<Unity>;
	isEdit = false;
	unities_types: CategoryType[] = [
		{ value: "lenght", name: "Longitud" },
		{ value: "area", name: "Superficie" },
		{ value: "weight", name: "Peso" },
		{ value: "capacity", name: "Capacidad" },
		{ value: "volume", name: "Volumen" }
	];

	constructor(
		private fBuilder: FormBuilder,
		private productService: ProductsService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			const unities: JsonApiList<Unity> = data.unities as JsonApiList<Unity>;
			this.categories = data.categories as JsonApiList<Category>;
			// inicializamos el selector de tipo de unidad y unidades
			this.unities.data = this.filterUnitiesByUnityType(unities, "capacity");

			this.unitySelection.valueChanges.subscribe((unityType: string) => {
				this.unities.data = this.filterUnitiesByUnityType(unities, unityType);
			});

			if (data.product) {
				this.product = data.product as JsonApiItem<Product>;
				this.isEdit = true;
				this.unitySelection.reset(
					this.product.data.attributes.unity?.unity_type
				);
				this.productForm.reset({
					...this.product.data.attributes,
					category_id: this.product.data.attributes.category_id.toString(),
					unity_id: this.product.data.attributes.unity_id.toString()
				});
			}
		});
	}

	isInValid(field: string): boolean {
		return !!(
			this.productForm.controls[field].errors &&
			this.productForm.controls[field].touched
		);
	}

	hasValue(field: string): boolean | undefined {
		return this.productForm.get(field)?.valid;
	}

	filterUnitiesByUnityType(
		unities: JsonApiList<Unity>,
		unityType: string
	): JsonApiData<Unity>[] {
		return unities.data.filter((unity) => {
			return unityType == unity.attributes.unity_type;
		});
	}

	submitProductForm(): void {
		if (this.isEdit) {
			this.productService
				.update(this.productForm.value, this.product.data.id)
				.subscribe(
					() => {
						void this.router.navigate(["productos"]);
					},
					() => {
						void this.router.navigate(["productos"]);
					}
				);
		} else {
			this.productService.create(this.productForm.value).subscribe(
				() => {
					void this.router.navigate(["productos"]);
				},
				() => {
					console.log("ERROR en producto");
				}
			);
		}
	}
}
