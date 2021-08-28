import { NgModule } from "@angular/core";

import {
	PurchasesRoutingModule,
	routingComponents
} from "./purchases-routing.module";
import { SharedModule } from "@shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CartFormComponent } from "./components/cart-form/cart-form.component";

@NgModule({
	declarations: [routingComponents, CartFormComponent],
	imports: [
		PurchasesRoutingModule,
		SharedModule,
		FontAwesomeModule,
		ReactiveFormsModule,
		NgSelectModule,
		FormsModule,
		NgbModule
	]
})
export class PurchasesModule {}
