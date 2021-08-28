import { NgModule } from "@angular/core";

import {
	ProvidersCategoriesRoutingModule,
	routingComponents
} from "./providers-categories-routing.module";
import { SharedModule } from "@shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [routingComponents],
	imports: [
		ProvidersCategoriesRoutingModule,
		SharedModule,
		FontAwesomeModule,
		ReactiveFormsModule
	]
})
export class ProvidersCategoriesModule {}
