import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClientsService } from "@core/http/clients/clients.service";
import { Client } from "@shared/models/client";
import { JsonApiList } from "@shared/models/json-api";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.sass"]
})
export class ListComponent implements OnInit {
	clients: JsonApiList<Client> = {} as JsonApiList<Client>;
	constructor(
		private activatedRoute: ActivatedRoute,
		private clientsService: ClientsService
	) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.clients = data.clients as JsonApiList<Client>;
		});
	}

	delete(id: number): void {
		this.clientsService.delete(id).subscribe(() => {
			this.clientsService.index().subscribe((res) => {
				this.clients = res;
			});
		});
	}
}
