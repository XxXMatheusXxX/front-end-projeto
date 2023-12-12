import { Component, OnInit } from '@angular/core';
import { Iprojeto } from '../service/iprojeto'
import { ProjetoService } from '../service/projeto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listarprojeto',
  templateUrl: './listarprojetos.component.html',
  styleUrls: ['./listarprojetos.component.scss']
})


export class ListarprojetoComponent implements OnInit {
  projetos: Iprojeto[] = [];

  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    descricao: new FormControl(''),
    participantes: new FormControl(''),
    responsavel: new FormControl(''),
    custo: new FormControl('')
  })


  constructor(
    private service: ProjetoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Listar();
  }

  Listar() {
    this.service.listar().subscribe(dados => this.projetos = dados);
  }

  Editar(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  Excluir(id: number) {
    this.service.excluir(id).subscribe(
      success => {
        alert("Cliente excluido com sucesso!")
        this.service.listar().subscribe(dados => this.projetos = dados);
      },
      Error => alert("Erro ao excluir o cliente ")
    );
  }

}
