import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
	ClientsCategoriesResolver,
	ClientsCategoryResolver
} from "@core/http/clients-categories/clients-categories.resolver";
import { FormComponent } from "./pages/form/form.component";
import { ListComponent } from "./pages/list/list.component";
import { ShowComponent } from "./pages/show/show.component";

const routes: Routes = [
	{
		path: "",
		resolve: { clientsCategories: ClientsCategoriesResolver },
		component: ListComponent
	},
	{
		path: "crear",
		component: FormComponent
	},
	{
		path: ":id/editar",
		resolve: { clientCategory: ClientsCategoryResolver },
		component: FormComponent
	},
	{
		path: ":id",
		resolve: { clientCategory: ClientsCategoryResolver },
		component: ShowComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ClientsCategoriesRoutingModule {}

export const routingComponents = [ListComponent, FormComponent, ShowComponent];
