import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { JsonApiList } from "@shared/models/json-api";
import { AccountsService } from "@core/http/accounts/accounts.service";
import { Account } from "@shared/models/account";

@Component({
	selector: "app-pages",
	templateUrl: "./list.component.html",
	styleUrls: []
})
export class ListComponent implements OnInit {
	accounts: JsonApiList<Account> = {} as JsonApiList<Account>;

	constructor(
		private activatedRoute: ActivatedRoute,
		private accountsService: AccountsService
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.accounts = data.accounts as JsonApiList<Account>;
		});
	}

	delete(id: number) {
		this.accountsService.delete(id).subscribe(() => {
			this.accountsService.index().subscribe((res) => {
				this.accounts = res;
			});
		});
	}
}
