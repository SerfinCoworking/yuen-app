import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActionButtonsComponent } from "./components/actions-buttons/action-buttons.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { ClickOutsideDirective } from "./directives/click-outside.directive";
import { LoadingIndicatorComponent } from "./components/loading-indicator/loading-indicator.component";
import { AngularSvgIconModule } from "angular-svg-icon";
import { WatermarkComponent } from "./components/watermark/watermark.component";
import { AlertsComponent } from "./components/alerts/alerts.component";
import { CanDirective } from "./directives/can.directive";

@NgModule({
	declarations: [
		CanDirective,
		ActionButtonsComponent,
		ClickOutsideDirective,
		LoadingIndicatorComponent,
		WatermarkComponent,
		AlertsComponent
	],
	imports: [
		CommonModule,
		FontAwesomeModule,
		NgbModule,
		RouterModule,
		AngularSvgIconModule.forRoot()
	],
	exports: [
		CanDirective,
		CommonModule,
		ActionButtonsComponent,
		ClickOutsideDirective,
		LoadingIndicatorComponent,
		WatermarkComponent,
		AlertsComponent
	]
})
export class SharedModule {}
