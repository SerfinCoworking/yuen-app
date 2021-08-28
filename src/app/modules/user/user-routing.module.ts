import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./pages/list/list.component";
import { FormComponent } from "./pages/form/form.component";
import { UserResolver } from "@core/http/user/user.resolver";

const routes: Routes = [
	{
		path: "",
		children: [
			{
				path: "",
				resolve: { users: UserResolver },
				component: ListComponent
			},
			{
				path: "crear",
				component: FormComponent
			},
			{
				path: ":id/editar",
				component: FormComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UserRoutingModule {}

export const routingComponents = [ListComponent, FormComponent];
