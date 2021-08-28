import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { faTrash, faPen, faEye } from "@fortawesome/free-solid-svg-icons";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
	selector: "app-action-buttons",
	templateUrl: "./action-buttons.component.html",
	styleUrls: ["./action-buttons.component.sass"]
})
export class ActionButtonsComponent implements OnInit {
	@Input() routePrefix!: string;
	@Input() id!: number;
	@Input() detroyModalContent!: string;
	@Output() deleteConfirm = new EventEmitter();
	faTrash = faTrash;
	faPen = faPen;
	faEye = faEye;
	showRoute = "";
	editRoute = "";

	constructor(private modalService: NgbModal) {}

	ngOnInit(): void {
		this.showRoute = `/${this.routePrefix}/${this.id}`;
		this.editRoute = `/${this.routePrefix}/${this.id}/editar`;
	}

	triggerModal(content: any): void {
		this.modalService
			.open(content, { ariaLabelledBy: "modal-basic-title" })
			.result.then(
				(res) => {
					if (res) {
						this.deleteConfirm.emit(this.id);
						return;
					}
				},
				(err) => {}
			);
	}
}
