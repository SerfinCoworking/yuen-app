import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlertsService } from "@core/http/alerts/alerts.service";
import { ResponseMessage } from "@shared/models/json-api";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable()
export class AlertInterceptor implements HttpInterceptor {
	constructor(private alertsService: AlertsService) {}

	intercept(
		httpRequest: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		return next.handle(httpRequest).pipe(
			tap((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse) {
					const body: ResponseMessage<any> = event.body as ResponseMessage<any>;
					if (body.status && body.message && event.status === 200) {
						this.alertsService.add({
							type: body.status,
							message: body.message
						});
					}
				}
			}),
			catchError((response) => {
				let errorMessage: any = "";
				if (response instanceof HttpErrorResponse) {
					const body: ResponseMessage<any> = response.error as ResponseMessage<any>;
					if (body.status && body.errors && response.status === 422) {
						this.alertsService.add({
							type: body.status,
							message: "Revisar los campos del formulario"
						});
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
						errorMessage = body.errors;
					}
				} else {
					// client-side error
					// errorMessage = `Client-side error: ${error.error.message}`;
				}
				return throwError(errorMessage);
			})
		);
	}
}
