import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicialPageComponent } from './inicial-page/inicial-page.component';


@NgModule({
  declarations: [
    InicialPageComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
