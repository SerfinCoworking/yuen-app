import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
	ClientsResolver,
	ClientResolver
} from "@core/http/clients/clients.resolver";
import { HeaderMenuComponent } from "./components/header-menu/header-menu.component";
import { FormComponent } from "./pages/form/form.component";
import { ListComponent } from "./pages/list/list.component";
import { ShowComponent } from "./pages/show/show.component";
import { ClientsCategoriesResolver } from "../../core/http/clients-categories/clients-categories.resolver";

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
				resolve: { clients: ClientsResolver },
				component: ListComponent
			},
			{
				path: "crear",
				resolve: { categories: ClientsCategoriesResolver },
				component: FormComponent
			},
			{
				path: ":id/editar",
				resolve: {
					client: ClientResolver,
					categories: ClientsCategoriesResolver
				},
				component: FormComponent
			},

			{
				path: "categorias",
				loadChildren: () =>
					import("@modules/clients-categories/clients-categories.module").then(
						(m) => m.ClientsCategoriesModule
					)
			},
			{
				path: ":id",
				resolve: { client: ClientResolver },
				component: ShowComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ClientsRoutingModule {}

export const routingComponents = [
	ListComponent,
	FormComponent,
	ShowComponent,
	HeaderMenuComponent
];
