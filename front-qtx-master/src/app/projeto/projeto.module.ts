import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetosRoutingModule } from './projeto-routing.module';
import { ListarprojetoComponent } from './listarprojetos/listarprojetos.component';



@NgModule({
  declarations: [
    ListarprojetoComponent,
    
  ],
  imports: [
    CommonModule,
    ProjetosRoutingModule
  ]
})
export class ProjetoModule { }
