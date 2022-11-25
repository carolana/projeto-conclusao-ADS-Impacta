import { Component, OnInit } from '@angular/core';
import { Produtos } from '../modelo/produtos';
import { ProdutosService } from '../modelo/produtos.service';

@Component({
  selector: 'app-pesquisar-produtos',
  templateUrl: './pesquisar-produtos.component.html',
  styleUrls: ['./pesquisar-produtos.component.css'],
})

//Este componente serve para Pesquisar o Preço de um Tênis especifico
export class PesquisarProdutosComponent implements OnInit {
  tenis: Produtos[];
  preco: number;

  constructor(private prod: ProdutosService) {
    this.tenis = [];

    //A função abaixo é chamada para exibir a lista de Tênis
    this.obterTenis();
    this.preco = 0;
  }

  ngOnInit() {}
  obterTenis(): void {
    this.prod.obterProdutos().subscribe((res) => {
      this.tenis = res;
    });
  }

  pesquisarTenis(form: any): void {
    //É passado o form e a variável "info" receber os valores do form
    let info = form.value;

    //Na função é passado o ID do produto, que neste caso foi nomeada de "prod", por isso "info.prod". A função retorna o valor do preço que é passado para a variável "preco" para ser exibida para o usuário.
    this.prod.pesquisarProdutoId(info.prod).subscribe((res) => {
      this.preco = res.pre;
    });
  }
}
