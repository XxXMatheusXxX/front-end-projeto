import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesModule } from './clientes/clientes.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { DepartamentosModule } from './departamento/departamento.module';
import { empresaModule } from './empresa/empresa.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { ProjetoModule } from './projeto/projeto.module';
import { InicioModule } from './inicio/inicio.module';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'inicio'},
  {path:'inicio', loadChildren:()=> InicioModule},
  {path:'clientes', loadChildren:()=> ClientesModule},
  {path:'fornecedor', loadChildren:()=> FornecedorModule},
  {path:'departamento', loadChildren:()=> DepartamentosModule},
  {path:'empresa', loadChildren:()=> empresaModule},
  {path:'funcionario', loadChildren:()=> FuncionarioModule},
  {path:'projeto', loadChildren:()=> ProjetoModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
