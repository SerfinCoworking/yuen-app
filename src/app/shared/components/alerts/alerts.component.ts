import { Component, Input, OnInit } from "@angular/core";
import { AlertsService } from "@core/http/alerts/alerts.service";
import { faCheckCircle, faBell } from "@fortawesome/free-regular-svg-icons";
import { Alert } from "@shared/models/alert";
import { Subscription, timer } from "rxjs";

@Component({
	selector: "app-alerts",
	templateUrl: "./alerts.component.html",
	styleUrls: ["./alerts.component.sass"]
})
export class AlertsComponent implements OnInit {
	@Input() alert!: Alert;
	@Input() autoClose = 0;
	faCheckCircle = faCheckCircle;
	faBell = faBell;
	isDanger = false;
	subscription$!: Subscription;

	constructor(private alertService: AlertsService) {}

	ngOnInit(): void {
		if (this.autoClose > 0) {
			const timer$ = timer(this.autoClose);
			this.subscription$ = timer$.subscribe(() => {
				this.removeAlert();
			});
		}
	}

	removeAlert(): void {
		this.subscription$.unsubscribe();
		this.alertService.remove(this.alert);
	}
}
