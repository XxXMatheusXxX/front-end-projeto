import { Component, OnInit } from '@angular/core';
import { Ifuncionarios } from '../service/ifuncionarios'
import { FuncionariosService } from '../service/funcionarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listarfuncionario',
  templateUrl: './listarfuncionario.component.html',
  styleUrls: ['./listarfuncionario.component.scss']
})


export class ListarfuncionarioComponent implements OnInit {
  funcionarios: Ifuncionarios[] = [];

  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    cargo: new FormControl(''),
    salario: new FormControl(''),
    area: new FormControl(''),
    local: new FormControl('')
  })


  constructor(
    private service: FuncionariosService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Listar();
  }

  Listar() {
    this.service.listar().subscribe(dados => this.funcionarios = dados);
  }

  Editar(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  Excluir(id: number) {
    this.service.excluir(id).subscribe(
      success => {
        alert("Funcionario excluido com sucesso!")
        this.service.listar().subscribe(dados => this.funcionarios = dados);
      },
      Error => alert("Erro ao excluir o funcionario ")
    );
  }

}
