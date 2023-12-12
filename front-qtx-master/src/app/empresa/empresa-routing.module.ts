import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarempresaComponent } from './listarempresa/listarempresa.component';
import { FormempresaComponent } from './form-empresa/form-empresa.component';

const routes: Routes = [
  {path:"", component: ListarempresaComponent},
  {path:"novo", component: FormempresaComponent},
  {path:"editar/:id", component: FormempresaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmpresaRoutingModule { 
  
}
