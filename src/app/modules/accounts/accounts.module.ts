import { NgModule } from "@angular/core";

import {
	AccountsRoutingModule,
	routingComponents
} from "./accounts-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ShowComponent } from "./pages/show/show.component";
import { HeaderMenuComponent } from "./components/header-menu/header-menu.component";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
	declarations: [routingComponents, ShowComponent, HeaderMenuComponent],
	imports: [
		AccountsRoutingModule,
		NgbModule,
		FontAwesomeModule,
		SharedModule,
		ReactiveFormsModule,
		NgSelectModule
	]
})
export class AccountsModule {}
