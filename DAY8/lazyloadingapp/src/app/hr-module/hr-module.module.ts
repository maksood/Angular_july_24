import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrModuleRoutingModule } from './hr-module-routing.module';
import { HrModuleComponent } from './hr-module.component';


@NgModule({
  declarations: [
    HrModuleComponent
  ],
  imports: [
    CommonModule,
    HrModuleRoutingModule
  ]
})
export class HrModuleModule { }
