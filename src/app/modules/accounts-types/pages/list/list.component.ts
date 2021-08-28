import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AccountsTypesService } from "@core/http/accounts-types/accounts-types.service";
import { AccountType } from "@shared/models/account-type";
import { JsonApiList } from "@shared/models/json-api";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.sass"]
})
export class ListComponent implements OnInit {
	accountsTypes: JsonApiList<AccountType> = {} as JsonApiList<AccountType>;

	constructor(
		private activatedRoute: ActivatedRoute,
		private accountsTypesService: AccountsTypesService
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.accountsTypes = data.accountsTypes as JsonApiList<AccountType>;
		});
	}

	delete(id: number) {
		this.accountsTypesService.delete(id).subscribe(() => {
			this.accountsTypesService.index().subscribe((res) => {
				this.accountsTypes = res;
			});
		});
	}
}
