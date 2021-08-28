import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
	ProductsCategoriesResolver,
	ProductsCategoryResolver
} from "@core/http/products-categories/products-categories.resolver";
import { FormComponent } from "./pages/form/form.component";
import { ListComponent } from "./pages/list/list.component";
import { ShowComponent } from "./pages/show/show.component";

const routes: Routes = [
	{
		path: "",
		children: [
			{
				path: "",
				resolve: { productsCategories: ProductsCategoriesResolver },
				component: ListComponent
			},
			{
				path: "crear",
				component: FormComponent
			},
			{
				path: ":id/editar",
				resolve: { productsCategory: ProductsCategoryResolver },
				component: FormComponent
			},
			{
				path: ":id",
				resolve: { productsCategory: ProductsCategoryResolver },
				component: ShowComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProductsCategoriesRoutingModule {}

export const routingComponents = [ListComponent, FormComponent, ShowComponent];
