import { Component } from "@angular/core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { AlertsService } from "@core/http/alerts/alerts.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.sass"]
})
export class HomeComponent {
	faHome = faHome;

	constructor(private alertService: AlertsService) {}

	showAlert(type: string, message: string): void {
		this.alertService.add({ type, message });
	}
}
