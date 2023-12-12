import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjetoService } from '../service/projeto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Iprojeto } from '../service/iprojeto';

@Component({
  selector: 'app-form-projetos',
  templateUrl: './form-projetos.component.html',
  styleUrls: ['./form-projetos.component.scss']
})

export class FormProjetosComponent implements  OnInit{
  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    descricao: new FormControl(''),
    participantes: new FormControl(''),
    responsavel: new FormControl(''),
    custo: new FormControl('')
})

constructor(
private service:ProjetoService,
private route:ActivatedRoute,
private router: Router
){ }

ngOnInit(){ this.ListarPorId(); }

Salvar() {
  if(this.form.value.id){
    this.service.atualizar(this.form.value).subscribe(
      success => {
        alert("projeto atualizado com sucesso!");
        this.router.navigate(['projeto']);
      },
      Error => alert("Erro ao atualizar o projeto ")
    );
  }

  else{ 
    this.service.criar(this.form.value).subscribe(
      success => {
        alert("projeto cadastrado com sucesso!");
        this.router.navigate(['projeto']);
      },
      Error => alert("Erro ao cadastrar o projeto ")
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

atualizarForm(projeto: Iprojeto){
  this.form.patchValue({
    id: projeto.id,
    nome:projeto.nome,
    descricao: projeto.descricao,
    participantes: projeto.participantes,
    responsavel: projeto.responsavel,
    custo: projeto.custo
  });

}

Cancelar() {
this.form.reset();
console.log('Cancelado');
this.router.navigate(['projeto']);
}

}
