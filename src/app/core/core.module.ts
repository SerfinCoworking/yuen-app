import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
	NgbDateAdapter,
	NgbDateParserFormatter,
	NgbModule
} from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";

import { LoaderService } from "@core/http/loader/loader.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoaderInterceptor } from "@core/interceptors/loader.interceptor";
import { AlertsService } from "./http/alerts/alerts.service";
import { AlertInterceptor } from "./interceptors/alert.interceptor";
import { SharedModule } from "@shared/shared.module";
import {
	CustomNgbDateAdapter,
	CustomNgbDateParserFormatter
} from "../configs/ngbdatepicker..adapter";

@NgModule({
	declarations: [HeaderComponent, FooterComponent, SidebarComponent],
	imports: [SharedModule, FontAwesomeModule, NgbModule, RouterModule],
	providers: [
		LoaderService,
		{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
		AlertsService,
		{ provide: HTTP_INTERCEPTORS, useClass: AlertInterceptor, multi: true },
		{ provide: NgbDateAdapter, useClass: CustomNgbDateAdapter },
		{ provide: NgbDateParserFormatter, useClass: CustomNgbDateParserFormatter }
	],
	exports: [SharedModule, HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {}
