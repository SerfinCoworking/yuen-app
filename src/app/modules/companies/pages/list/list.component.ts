import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CompaniesService } from "@core/http/companies/companies.service";
import { Company } from "@shared/models/company";
import { JsonApiList } from "@shared/models/json-api";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.sass"]
})
export class ListComponent implements OnInit {
	companies: JsonApiList<Company> = {} as JsonApiList<Company>;

	constructor(
		private activatedRoute: ActivatedRoute,
		private companiesService: CompaniesService
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.companies = data.companies as JsonApiList<Company>;
		});
	}

	delete(id: number): void {
		this.companiesService.delete(id).subscribe(() => {
			this.companiesService.index().subscribe((res) => {
				this.companies = res;
			});
		});
	}
}
