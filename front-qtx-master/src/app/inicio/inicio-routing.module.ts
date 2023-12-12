import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialPageComponent } from './inicial-page/inicial-page.component';

const routes: Routes = [
  {path:"", component: InicialPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
