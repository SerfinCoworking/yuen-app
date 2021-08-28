import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@core/guards/auth.guard";

const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		canActivate: [AuthGuard],
		loadChildren: () =>
			import("@modules/home/home.module").then((m) => m.HomeModule)
	},
	{
		path: "usuarios",
		canActivate: [AuthGuard],
		loadChildren: () =>
			import("@modules/user/user.module").then((m) => m.UserModule)
	},
	{
		path: "cuentas",
		loadChildren: () =>
			import("@modules/accounts/accounts.module").then((m) => m.AccountsModule)
	},
	{
		path: "productos",
		loadChildren: () =>
			import("@modules/products/products.module").then((m) => m.ProductsModule)
	},
	{
		path: "proveedores",
		loadChildren: () =>
			import("@modules/providers/providers.module").then(
				(m) => m.ProvidersModule
			)
	},
	{
		path: "clientes",
		loadChildren: () =>
			import("@modules/clients/clients.module").then((m) => m.ClientsModule)
	},
	{
		path: "empresas",
		loadChildren: () =>
			import("@modules/companies/companies.module").then(
				(m) => m.CompaniesModule
			)
	},
	{
		path: "compras",
		loadChildren: () =>
			import("@modules/purchases/purchases.module").then(
				(m) => m.PurchasesModule
			)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
