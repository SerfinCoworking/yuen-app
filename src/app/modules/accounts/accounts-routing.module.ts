import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./pages/list/list.component";
import { FormComponent } from "./pages/form/form.component";
import { ShowComponent } from "./pages/show/show.component";
import { HeaderMenuComponent } from "./components/header-menu/header-menu.component";
import {
	AccountResolver,
	AccountsResolver
} from "@core/http/accounts/accounts.resolver";
import { AccountsTypesResolver } from "@core/http/accounts-types/accounts-types.resolver";
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
				component: ListComponent,
				resolve: { accounts: AccountsResolver }
			},
			{
				path: "crear",
				component: FormComponent,
				resolve: { types: AccountsTypesResolver }
			},
			{
				path: ":id/editar",
				component: FormComponent,
				resolve: { account: AccountResolver, types: AccountsTypesResolver }
			},
			{
				path: "tipos",
				loadChildren: () =>
					import("@modules/accounts-types/accounts-types.module").then(
						(m) => m.AccountsTypesModule
					)
			},
			{
				path: ":id",
				component: ShowComponent,
				resolve: { account: AccountResolver }
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AccountsRoutingModule {}

export const routingComponents = [
	ListComponent,
	FormComponent,
	ShowComponent,
	HeaderMenuComponent
];
