import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
import { PermissionService } from "@core/auth/permission.service";

@Directive({
	selector: "[appCan]"
})
export class CanDirective {
	private hasView = false;
	@Input("appCan") permission = "";

	constructor(
		private templateRef: TemplateRef<any>,
		private vcr: ViewContainerRef,
		private permissionService: PermissionService
	) {}

	ngOnInit() {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		this.permissionService.hasPermission(this.permission).then((permit) => {
			if (permit && !this.hasView) {
				this.vcr.createEmbeddedView(this.templateRef);
				this.hasView = true;
			} else if (!permit && this.hasView) {
				this.vcr.clear();
				this.hasView = false;
			}
		});
	}
}
