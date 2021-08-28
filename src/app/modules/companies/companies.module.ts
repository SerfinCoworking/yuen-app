import { NgModule } from "@angular/core";

import {
	CompaniesRoutingModule,
	routingComponents
} from "./companies-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [routingComponents],
	imports: [
		CompaniesRoutingModule,
		SharedModule,
		FontAwesomeModule,
		ReactiveFormsModule
	]
})
export class CompaniesModule {}
