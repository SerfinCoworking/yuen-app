import { AuthService } from "@core/auth/auth.service";

export function loadPermissions(authService: AuthService) {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	return async () => {
		await authService.getPermissionsAsync();
	};
}
