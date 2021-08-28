import { Injectable } from "@angular/core";
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from "@angular/common/http";
import { from, Observable } from "rxjs";
import { AuthService } from "@core/auth/auth.service";
import { switchMap } from "rxjs/operators";

@Injectable()
export class AuthorizeHttpInterceptor implements HttpInterceptor {
	constructor(private authService: AuthService) {}

	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		const scopes: string | undefined = request.params.get("scope") || "";

		return from(this.authService.getAccessTokenSilently(scopes)).pipe(
			switchMap((token) => {
				const headers = request.headers.set("Authorization", "Bearer " + token);
				const requestClone = request.clone({
					headers
				});
				return next.handle(requestClone);
			})
		);
	}
}
