import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarprojetoComponent } from './listarprojetos/listarprojetos.component';
import { FormProjetosComponent } from './form-projetos/form-projetos.component';

const routes: Routes = [
  {path:"", component: ListarprojetoComponent},
  {path:"novo", component: FormProjetosComponent},
  {path:"editar/:id", component: FormProjetosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetosRoutingModule { }