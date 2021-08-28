import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
	ProvidersResolver,
	ProviderResolver
} from "@core/http/providers/providers.resolver";
import { HeaderMenuComponent } from "./components/header-menu/header-menu.component";
import { FormComponent } from "./pages/form/form.component";
import { ListComponent } from "./pages/list/list.component";
import { ShowComponent } from "./pages/show/show.component";
import { ProvidersCategoriesResolver } from "../../core/http/providers-categories/providers-categories.resolver";

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
				resolve: { providers: ProvidersResolver },
				component: ListComponent
			},
			{
				path: "crear",
				resolve: { categories: ProvidersCategoriesResolver },
				component: FormComponent
			},
			{
				path: ":id/editar",
				resolve: {
					provider: ProviderResolver,
					categories: ProvidersCategoriesResolver
				},
				component: FormComponent
			},

			{
				path: "categorias",
				loadChildren: () =>
					import(
						"@modules/providers-categories/providers-categories.module"
					).then((m) => m.ProvidersCategoriesModule)
			},
			{
				path: ":id",
				resolve: { provider: ProviderResolver },
				component: ShowComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProvidersRoutingModule {}

export const routingComponents = [
	ListComponent,
	FormComponent,
	ShowComponent,
	HeaderMenuComponent
];
