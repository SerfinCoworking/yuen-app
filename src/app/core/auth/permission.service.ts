import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable({
	providedIn: "root"
})
export class PermissionService {
	constructor(private authService: AuthService) {}

	async hasPermission(permission: string): Promise<boolean> {
		return await new Promise((resolve) => {
			const userPermissions: Array<string> = this.authService
				.availablePermissions;
			resolve(userPermissions.includes(permission));
		});
	}
}
