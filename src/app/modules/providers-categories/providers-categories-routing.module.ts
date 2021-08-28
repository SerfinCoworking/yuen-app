import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
	ProvidersCategoriesResolver,
	ProvidersCategoryResolver
} from "@core/http/providers-categories/providers-categories.resolver";
import { FormComponent } from "./pages/form/form.component";
import { ListComponent } from "./pages/list/list.component";
import { ShowComponent } from "./pages/show/show.component";

const routes: Routes = [
	{
		path: "",
		resolve: { providersCategories: ProvidersCategoriesResolver },
		component: ListComponent
	},
	{
		path: "crear",
		component: FormComponent
	},
	{
		path: ":id/editar",
		resolve: { providersCategory: ProvidersCategoryResolver },
		component: FormComponent
	},
	{
		path: ":id",
		resolve: { providersCategory: ProvidersCategoryResolver },
		component: ShowComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProvidersCategoriesRoutingModule {}

export const routingComponents = [FormComponent, ShowComponent, ListComponent];
