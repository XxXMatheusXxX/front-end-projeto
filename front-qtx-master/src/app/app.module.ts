import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormClientesComponent } from './clientes/form-clientes/form-clientes.component';
import { FormFornecedorComponent } from './fornecedor/form-fornecedor/form-fornecedor.component';
import { ClientesRoutingModule } from './clientes/clientes-routing.module';
import { FornecedorRoutingModule } from './fornecedor/fornecedor-routing.module';
import { FormDepartamentosComponent } from './departamento/form-departamentos/form-departamentos.component';
import { DepartamentosModule } from './departamento/departamento.module';
import { FormempresaComponent } from './empresa/form-empresa/form-empresa.component';
import { empresaModule } from './empresa/empresa.module';
import { FormFuncionarioComponent } from './funcionario/form-funcionario/form-funcionario.component';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { FormProjetosComponent } from './projeto/form-projetos/form-projetos.component';
import { ProjetoModule } from './projeto/projeto.module';

@NgModule({
  declarations: [
    AppComponent,
    FormClientesComponent,
    FormFornecedorComponent,
    FormDepartamentosComponent,
    FormempresaComponent,
    FormFuncionarioComponent,
    FormProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClientesRoutingModule,
    FornecedorRoutingModule,
    DepartamentosModule,
    empresaModule,
    FuncionarioModule,
    ProjetoModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
