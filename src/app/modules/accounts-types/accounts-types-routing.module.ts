import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsTypeResolver, AccountsTypesResolver } from '@core/http/accounts-types/accounts-types.resolver';
import { FormComponent } from './pages/form/form.component';

import { ListComponent } from './pages/list/list.component';
import { ShowComponent } from './pages/show/show.component';

const routes: Routes = [
  {
    path:"",
    resolve: {accountsTypes: AccountsTypesResolver},
    component: ListComponent
  },
  {
    path:"crear",
    component: FormComponent
  },
  {
    path:":id/editar",
    resolve: {accountsType:AccountsTypeResolver},
    component: FormComponent
  },
  {
    path:":id",
    resolve: {accountsType:AccountsTypeResolver},
    component: ShowComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsTypesRoutingModule { }
export const routingComponents = [FormComponent,ShowComponent, ListComponent]