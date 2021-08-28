import { Component } from "@angular/core";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-loading-indicator",
	templateUrl: "./loading-indicator.component.html",
	styleUrls: ["./loading-indicator.component.sass"]
})
export class LoadingIndicatorComponent {
	faCircleNotch = faCircleNotch;
}
