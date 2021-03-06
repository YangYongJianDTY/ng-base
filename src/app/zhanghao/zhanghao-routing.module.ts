import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ModifymmComponent } from './modifymm/modifymm.component';


const routes: Routes = [
{
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'modifymm',
    component: ModifymmComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZhanghaoRoutingModule { }
