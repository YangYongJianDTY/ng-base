import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElModule } from 'element-angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ZhanghaoRoutingModule } from './zhanghao-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ModifymmComponent } from './modifymm/modifymm.component';

@NgModule({
  imports: [
    CommonModule,
    ZhanghaoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ElModule
  ],
  declarations: [LoginComponent, RegisterComponent, ModifymmComponent]
})
export class ZhanghaoModule { }
