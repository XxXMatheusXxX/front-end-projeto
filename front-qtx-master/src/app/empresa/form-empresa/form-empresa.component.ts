import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmpresaService } from '../service/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Iempresa } from '../service/iempresa';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.scss']
})

export class FormempresaComponent implements  OnInit{
  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    cnpj: new FormControl(''),
    socios: new FormControl(''),
    endereco: new FormControl(''),
    faturamento: new FormControl('')
})

constructor(
private service:EmpresaService,
private route:ActivatedRoute,
private router: Router
){ }

ngOnInit(){ this.ListarPorId(); }

Salvar() {
  if(this.form.value.id){
    this.service.atualizar(this.form.value).subscribe(
      success => {
        alert("empresa atualizado com sucesso!");
        this.router.navigate(['empresa']);
      },
      Error => alert("Erro ao atualizar o empresa ")
    );
  }

  else{ 
    this.service.criar(this.form.value).subscribe(
      success => {
        alert("empresa cadastrado com sucesso!");
        this.router.navigate(['empresa']);
      },
      Error => alert("Erro ao cadastrar o empresa ")
    );
  }


}

ListarPorId(){
  this.route.params
  .pipe(
    map((params: any) => params['id']),
    switchMap(id => this.service.listarPorId(id))

  ).subscribe(empresa => this.atualizarForm(empresa));
}

atualizarForm(empresa: Iempresa){
  this.form.patchValue({
    id: empresa.id,
    nome:empresa.nome,
    cnpj: empresa.cnpj,
    endereco: empresa.endereco,
    socios: empresa.socios,
    faturamento: empresa.faturamento
  });

}

Cancelar() {
this.form.reset();
console.log('Cancelado');
this.router.navigate(['empresa']);
}

}