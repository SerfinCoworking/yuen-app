import { Injectable } from "@angular/core";
import { Alert } from "@shared/models/alert";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class AlertsService {
	private alerts: Array<Alert> = [];
	private __alerts$: BehaviorSubject<Array<Alert>> = new BehaviorSubject<
		Array<Alert>
	>(this.alerts);

	add(alert: Alert): void {
		this.alerts.push(alert);
		this.__alerts$.next(this.alerts);
	}

	remove(alert: Alert): void {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
		this.__alerts$.next(this.alerts);
	}

	get alertsMessages(): Observable<Array<Alert>> {
		return this.__alerts$;
	}
}
