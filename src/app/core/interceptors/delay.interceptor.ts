import {
	HttpEvent,
	HttpHandler,
	HttpRequest,
	HttpInterceptor
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class DelayInterceptor implements HttpInterceptor {
	intercept(
		httpRequest: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		// console.log(httpRequest)
		if (
			httpRequest.method === "GET" &&
			httpRequest.urlWithParams.includes("products")
		) {
			console.log("solo get de productos");
		}
		return next.handle(httpRequest);
	}
}
