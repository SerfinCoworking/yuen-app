import { NgModule } from "@angular/core";

import {
	ProvidersRoutingModule,
	routingComponents
} from "./providers-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
	declarations: [routingComponents],
	imports: [
		ProvidersRoutingModule,
		SharedModule,
		FontAwesomeModule,
		ReactiveFormsModule,
		NgSelectModule
	]
})
export class ProvidersModule {}
