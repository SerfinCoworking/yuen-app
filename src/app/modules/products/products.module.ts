import { NgModule } from "@angular/core";

import {
	ProductsRoutingModule,
	routingComponents
} from "./products-routing.module";
import { SharedModule } from "@shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
	declarations: [routingComponents],
	imports: [
		ProductsRoutingModule,
		SharedModule,
		FontAwesomeModule,
		ReactiveFormsModule,
		NgSelectModule
	]
})
export class ProductsModule {}