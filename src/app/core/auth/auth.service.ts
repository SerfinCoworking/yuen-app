import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService as Auth0Service } from "@auth0/auth0-angular";
import { Observable, of } from "rxjs";
import { tap, catchError, first } from "rxjs/operators";
import { environment as env } from "../../../environments/environment";

@Injectable({
	providedIn: "root"
})
export class AuthService {
	private permissions: Array<string> = [];

	constructor(private http: HttpClient, private auth0Service: Auth0Service) {}

	buildAuthorizeUrl(scope: string | undefined): Observable<string> {
		return this.auth0Service.buildAuthorizeUrl({ scope });
	}

	getAccessTokenWithPopup(scope: string | undefined): Observable<string> {
		return this.auth0Service.getAccessTokenWithPopup({ scope }).pipe(
			tap((res) => {
				// console.log(res, "popUP");
			})
		);
	}

	getAccessTokenSilently(scope: string | undefined): Observable<string> {
		return this.auth0Service.getAccessTokenSilently({ scope: scope }).pipe(
			tap((token) => {
				// console.log(token, "debug");
			}),
			catchError((error) => {
				// hay que checkear si es un error por falta de consentimiento
				// y no manejarlo de otra forma si no lo es.
				return this.getAccessTokenWithPopup(scope);
			})
		);
	}

	async getPermissionsAsync(): Promise<void> {
		await this.auth0Service.idTokenClaims$
			.pipe(
				tap((claims: any) => {
					// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
					this.permissions = claims[env.auth0.claims.permissions.name][
						env.auth0.claims.permissions.from
					] as Array<string>;
				}),
				first(),
				catchError((e) => {
					this.login();
					return of(false);
				})
			)
			.toPromise();
	}

	login(): void {
		this.auth0Service.loginWithRedirect();
	}

	logout(): void {
		this.auth0Service.logout();
	}

	get errors(): Observable<any> {
		return this.auth0Service.error$;
	}
	get isLoggedIn(): Observable<boolean> {
		return this.auth0Service.isAuthenticated$;
	}

	get profile(): Observable<any> {
		return this.auth0Service.user$;
	}

	get availablePermissions(): Array<string> {
		return this.permissions;
	}
}
