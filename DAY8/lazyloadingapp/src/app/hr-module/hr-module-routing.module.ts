import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrModuleComponent } from './hr-module.component';

const routes: Routes = [{ path: '', component: HrModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrModuleRoutingModule { }
