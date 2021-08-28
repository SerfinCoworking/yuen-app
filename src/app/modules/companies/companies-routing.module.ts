import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyResolver, CompaniesResolver } from '@core/http/companies/companies.resolver';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { FormComponent } from './pages/form/form.component';
import { ListComponent } from './pages/list/list.component';
import { ShowComponent } from './pages/show/show.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path:"",
        component: HeaderMenuComponent,
        outlet: "header-top"
      },
      {
        path:"",
        resolve: {companies: CompaniesResolver},
        component: ListComponent
      },
      {
        path:"crear",
        component: FormComponent
      },
      {
        path:":id/editar",
        resolve: {company: CompanyResolver},
        component: FormComponent
      },
      {
        path:":id",
        resolve: {company: CompanyResolver},
        component: ShowComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
export const routingComponents = [ListComponent, FormComponent, ShowComponent, HeaderMenuComponent]