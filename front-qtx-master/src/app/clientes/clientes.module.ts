import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ListarClientesComponent } from './listarclientes/listarclientes.component';


@NgModule({
  declarations: [
   ListarClientesComponent,
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
