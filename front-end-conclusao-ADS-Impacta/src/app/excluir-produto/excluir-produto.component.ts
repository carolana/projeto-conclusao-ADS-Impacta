import { Component, OnInit } from '@angular/core';
import { Produtos } from '../modelo/produtos';
import { ProdutosService } from '../modelo/produtos.service';

@Component({
  selector: 'app-excluir-produto',
  templateUrl: './excluir-produto.component.html',
  styleUrls: ['./excluir-produto.component.css'],
})

//Este componente serve para excluir os tênis
export class ExcluirProdutoComponent implements OnInit {
  tenis: Produtos[];

  constructor(private prod: ProdutosService) {
    this.tenis = [];

    //Primeiramente, esta função pega todos os tênis e exibir para o usuário, para que este possa escolher qual tênis quer remover
    this.obterTenis();
  }
  obterTenis(): void {
    this.prod.obterProdutos().subscribe((res) => {
      return (this.tenis = res);
    });
  }
  ngOnInit() {}

  excluirTenis(form: any): void {
    //Neste função é passada o form do html, e a variável "info" pega os valores do inputs do form
    let info = form.value;

    //A função do Serviço é chamada e o ID do tênis é passado para que ocorra a remoção, neste caso, o input com o ID se chama "prod"
    this.prod.excluiProdutoId(info.prod).subscribe((res) => {
      console.log(res.msg);
    });
  }
}
