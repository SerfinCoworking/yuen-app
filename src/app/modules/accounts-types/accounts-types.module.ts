import { NgModule } from "@angular/core";
import {
	AccountsTypesRoutingModule,
	routingComponents
} from "./accounts-types-routing.module";
import { SharedModule } from "@shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [routingComponents],
	imports: [
		AccountsTypesRoutingModule,
		SharedModule,
		FontAwesomeModule,
		ReactiveFormsModule
	]
})
export class AccountsTypesModule {}
