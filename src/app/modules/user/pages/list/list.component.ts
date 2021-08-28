import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { JsonApiList } from "@shared/models/json-api";
import { User } from "@shared/models/user";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.sass"]
})
export class ListComponent implements OnInit {
	users: JsonApiList<User> = {} as JsonApiList<User>;

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.activatedRoute.data.subscribe((data) => {
			this.users = data.users as JsonApiList<User>;
		});
	}
}
