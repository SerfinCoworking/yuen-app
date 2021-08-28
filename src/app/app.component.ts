import { Component } from "@angular/core";
import { AuthService } from "@core/auth/auth.service";
import { faAngular, faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { Observable, Subject } from "rxjs";
import { LoaderService } from "@core/http/loader/loader.service";
import { AlertsService } from "@core/http/alerts/alerts.service";
import { Alert } from "@shared/models/alert";
import {
	animate,
	state,
	style,
	transition,
	trigger
} from "@angular/animations";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.sass"],
	animations: [
		trigger("fade", [
			state("*", style({ position: "relative", top: "0px" })),
			state("void", style({ position: "relative", top: "10px", opacity: 0 })),
			transition("void => *", [animate(500)]),
			transition("* => void", [
				animate(750, style({ top: "-10px", opacity: 0 }))
			])
		])
	]
})
export class AppComponent {
	title = "yuen-app";
	faAngular = faAngular;
	faBootstrap = faBootstrap;
	sidebarHide = false;
	isLoggedIn$: Observable<boolean>;
	isLoading$: Subject<boolean>;
	alerts$: Observable<Array<Alert>>;

	constructor(
		private auth: AuthService,
		private loaderService: LoaderService,
		private alertsService: AlertsService
	) {
		this.isLoggedIn$ = this.auth.isLoggedIn;
		this.isLoading$ = this.loaderService.isLoading;
		this.alerts$ = this.alertsService.alertsMessages;
	}
}
