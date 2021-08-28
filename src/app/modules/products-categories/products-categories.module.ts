import { NgModule } from "@angular/core";

import {
	ProductsCategoriesRoutingModule,
	routingComponents
} from "./products-categories-routing.module";
import { SharedModule } from "@shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [routingComponents],
	imports: [
		ProductsCategoriesRoutingModule,
		SharedModule,
		FontAwesomeModule,
		ReactiveFormsModule
	]
})
export class ProductsCategoriesModule {}
