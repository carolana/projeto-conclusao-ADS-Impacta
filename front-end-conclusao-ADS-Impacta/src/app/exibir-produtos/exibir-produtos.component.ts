import { Component, OnInit } from '@angular/core';
import { Produtos } from '../modelo/produtos';
import { ProdutosService } from '../modelo/produtos.service';

@Component({
  selector: 'app-exibir-produtos',
  templateUrl: './exibir-produtos.component.html',
  styleUrls: ['./exibir-produtos.component.css'],
})

//Este componente serve pra Exibir a Lista de Tênis.
export class ExibirProdutosComponent implements OnInit {
  tenis: Produtos[];

  constructor(private prod: ProdutosService) {
    //Variável vazia para não dá erro de "undefined"
    this.tenis = [];

    //Essa função é chamada para pegar todos os tênis dos Repl.it e exbir no componente
    this.listarTenis();
  }

  ngOnInit() {}

  listarTenis(): void {
    //É chamada a função do Serviço que pega os tênis
    this.prod.obterProdutos().subscribe((res) => {
      this.tenis = res;
      console.log(this.tenis);
    });
  }
}
