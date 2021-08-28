import { Component, Input } from "@angular/core";
import {
	faBars,
	faAngleLeft,
	faUser,
	faMoneyBill,
	faHome,
	faCalculator,
	faBoxes,
	faTruck,
	faUsers,
	faShoppingCart,
	faBuilding
} from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-sidebar",
	templateUrl: "./sidebar.component.html",
	styleUrls: ["./sidebar.component.sass"]
})
export class SidebarComponent {
	@Input() hide = false;
	mid = false;

	faBuilding = faBuilding;
	faBars = faBars;
	faAngleLeft = faAngleLeft;
	faUser = faUser;
	faMoneyBill = faMoneyBill;
	faHome = faHome;
	faCalculator = faCalculator;
	faBoxes = faBoxes;
	faTruck = faTruck;
	faUsers = faUsers;
	faShoppingCart = faShoppingCart;

	toggleSidebarMid(): void {
		this.mid = !this.mid;
	}
}
