import { NgModule } from "@angular/core";

import {
	ClientsCategoriesRoutingModule,
	routingComponents
} from "./clients-categories-routing.module";
import { SharedModule } from "@shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [routingComponents],
	imports: [
		ClientsCategoriesRoutingModule,
		SharedModule,
		FontAwesomeModule,
		ReactiveFormsModule
	]
})
export class ClientsCategoriesModule {}
