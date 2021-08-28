import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
	ProductsResolver,
	ProductResolver
} from "@core/http/products/products.resolver";
import { ListComponent } from "./pages/list/list.component";
import { FormComponent } from "./pages/form/form.component";
import { ShowComponent } from "./pages/show/show.component";
import { ProductsCategoriesResolver } from "@core/http/products-categories/products-categories.resolver";
import { UnitiesResolver } from "@core/http/unities/unities.resolver";
import { HeaderMenuComponent } from "./components/header-menu/header-menu.component";

const routes: Routes = [
	{
		path: "",
		children: [
			{
				path: "",
				component: HeaderMenuComponent,
				outlet: "header-top"
			},
			{
				path: "",
				resolve: { products: ProductsResolver },
				component: ListComponent
			},
			{
				path: "crear",
				resolve: {
					categories: ProductsCategoriesResolver,
					unities: UnitiesResolver
				},
				component: FormComponent
			},
			{
				path: ":id/editar",
				resolve: {
					product: ProductResolver,
					categories: ProductsCategoriesResolver,
					unities: UnitiesResolver
				},
				component: FormComponent
			},
			{
				path: "categorias",
				loadChildren: () =>
					import(
						"@modules/products-categories/products-categories.module"
					).then((m) => m.ProductsCategoriesModule)
			},
			{
				path: ":id",
				resolve: {
					product: ProductResolver
				},
				component: ShowComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProductsRoutingModule {}

export const routingComponents = [
	HeaderMenuComponent,
	ListComponent,
	FormComponent,
	ShowComponent
];
