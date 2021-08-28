/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderMenuComponent } from "./components/header-menu/header-menu.component";
import { FormComponent } from "./pages/form/form.component";
import { ListComponent } from "./pages/list/list.component";
import { ShowComponent } from "./pages/show/show.component";
import { ProductCartComponent } from "./pages/product-cart/product-cart.component";
import {
	PurchaseResolver,
	PurchasesResolver
} from "@core/http/purchases/purchases.resolver";
import { ProvidersResolver } from "@core/http/providers/providers.resolver";
import { ProductsResolver } from "@core/http/products/products.resolver";

const routes: Routes = [
	{
		path: "",
		component: HeaderMenuComponent,
		outlet: "header-top"
	},
	{
		path: "",
		resolve: { purchases: PurchasesResolver },
		component: ListComponent
	},
	{
		path: "nueva",
		resolve: { providers: ProvidersResolver },
		component: FormComponent
	},
	{
		path: ":id/editar",
		resolve: {
			purchase: PurchaseResolver,
			providers: ProvidersResolver
		},
		component: FormComponent
	},
	{
		path: ":id/editar/carrito",
		resolve: {
			purchase: PurchaseResolver
		},
		component: ProductCartComponent
	},
	{
		path: ":id",
		resolve: { purchase: PurchaseResolver },
		component: ShowComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PurchasesRoutingModule {}

export const routingComponents = [
	ShowComponent,
	FormComponent,
	ListComponent,
	ProductCartComponent,
	HeaderMenuComponent
];
