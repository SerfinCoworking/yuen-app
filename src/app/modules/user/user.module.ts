import { NgModule } from "@angular/core";

import { UserRoutingModule, routingComponents } from "./user-routing.module";
import { SharedModule } from "@shared/shared.module";

@NgModule({
	declarations: [routingComponents],
	imports: [UserRoutingModule, SharedModule]
})
export class UserModule {}
