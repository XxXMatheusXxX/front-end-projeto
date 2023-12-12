import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FuncionariosService } from '../service/funcionarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Ifuncionarios } from '../service/ifuncionarios';

@Component({
  selector: 'app-form-funcionario',
  templateUrl: './form-funcionario.component.html',
  styleUrls: ['./form-funcionario.component.scss']
})

export class FormFuncionarioComponent implements  OnInit{
  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    cargo: new FormControl(''),
    salario: new FormControl(''),
    area: new FormControl(''),
    local: new FormControl('')
})

constructor(
private service:FuncionariosService,
private route:ActivatedRoute,
private router: Router
){ }

ngOnInit(){ this.ListarPorId(); }

Salvar() {
  if(this.form.value.id){
    this.service.atualizar(this.form.value).subscribe(
      success => {
        alert("funcionario atualizado com sucesso!");
        this.router.navigate(['funcionario']);
      },
      Error => alert("Erro ao atualizar o funcionario ")
    );
  }

  else{ 
    this.service.criar(this.form.value).subscribe(
      success => {
        alert("funcionario cadastrado com sucesso!");
        this.router.navigate(['funcionario']);
      },
      Error => alert("Erro ao cadastrar o funcionario ")
    );
  }


}

ListarPorId(){
  this.route.params
  .pipe(
    map((params: any) => params['id']),
    switchMap(id => this.service.listarPorId(id))

  ).subscribe(funcionario => this.atualizarForm(funcionario));
}

atualizarForm(funcionario: Ifuncionarios){
  this.form.patchValue({
    id: funcionario.id,
    nome:funcionario.nome,
    cargo: funcionario.cargo,
    salario: funcionario.salario,
    area: funcionario.area,
    local: funcionario.local
  });

}

Cancelar() {
this.form.reset();
console.log('Cancelado');
this.router.navigate(['funcionario']);
}

}
