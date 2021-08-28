import { NgModule } from "@angular/core";

import { HomeRoutingModule, routingComponents } from "./home-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
	declarations: [routingComponents],
	imports: [FontAwesomeModule, HomeRoutingModule]
})
export class HomeModule {
	title = "Home";
}
