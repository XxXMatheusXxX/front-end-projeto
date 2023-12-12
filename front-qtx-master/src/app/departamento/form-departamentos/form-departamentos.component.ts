import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DepartamentoService } from '../service/departamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Idepartamento } from '../service/idepartamento';

@Component({
  selector: 'app-form-departamento',
  templateUrl: './form-departamentos.component.html',
  styleUrls: ['./form-departamentos.component.scss']
})

export class FormDepartamentosComponent implements  OnInit{
  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    localidade: new FormControl(''),
    descricao: new FormControl(''),
    email: new FormControl('')
})

constructor(
private service:DepartamentoService,
private route:ActivatedRoute,
private router: Router
){ }

ngOnInit(){ this.ListarPorId(); }

Salvar() {
  if(this.form.value.id){
    this.service.atualizar(this.form.value).subscribe(
      success => {
        alert("Departamento atualizado com sucesso!");
        this.router.navigate(['departamento']);
      },
      Error => alert("Erro ao atualizar o departamento ")
    );
  }

  else{ 
    this.service.criar(this.form.value).subscribe(
      success => {
        alert("Departamento cadastrado com sucesso!");
        this.router.navigate(['departamento']);
      },
      Error => alert("Erro ao cadastrar o departamento ")
    );
  }



}

ListarPorId(){
  this.route.params
  .pipe(
    map((params: any) => params['id']),
    switchMap(id => this.service.listarPorId(id))

  ).subscribe(curso => this.atualizarForm(curso));
}

atualizarForm(departamento: Idepartamento){
  this.form.patchValue({
    id: departamento.id,
    nome:departamento.nome,
    localidade: departamento.localidade,
    descricao: departamento.descricao,
    email: departamento.email
  });

}

Cancelar() {
this.form.reset();
console.log('Cancelado');
this.router.navigate(['departamento']);
}

}
