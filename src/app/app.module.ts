import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AuthModule, AuthHttpInterceptor } from "@auth0/auth0-angular";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { environment as env } from "../environments/environment";
import { AuthorizeHttpInterceptor } from "@core/interceptors/authorize-http.interceptor";
import { AuthService } from "@core/auth/auth.service";
import { loadPermissions } from "@core/http/initializer.service";
import { PermissionService } from "@core/auth/permission.service";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AuthModule.forRoot({
			...env.auth,
			useRefreshTokens: true,
			httpInterceptor: {
				allowedList: [`${env.API_URL}/*`]
			}
		}),
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		CoreModule
	],
	providers: [
		AuthService,
		{
			provide: APP_INITIALIZER,
			useFactory: loadPermissions,
			multi: true,
			deps: [AuthService, PermissionService]
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthHttpInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthorizeHttpInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
