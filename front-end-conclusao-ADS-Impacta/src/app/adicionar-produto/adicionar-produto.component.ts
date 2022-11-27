import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Produtos } from '../modelo/produtos';
import { ProdutosService } from '../modelo/produtos.service';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css'],
})

//Este Componente foi criado para Adicionar novos produtos, no caso, tênis
export class AdicionarProdutoComponent implements OnInit {
  tenis: Produtos[];

  //Neste componente é criado os atributos "idVar" que servirá para pegar o ID do último Produto.
  idVar!: number;

  //Está variável foi criada para passar as informações do produto quando a função de adicionar for chamada
  proTenis: any;

  //Esta variável servirá apenas para exibir se o cadastro deu certo ou não
  msg: string;

  constructor(private prod: ProdutosService) {
    //As variáveis são definidaas como "vazio" para que não ocorrá problema de "Undefined"
    this.msg = '';
    this.tenis = [];

    //A função é chamada apenas para poder pegar o ID do último item da lista de tênis
    this.obterTenis();
    //this.idVar = this.tenis[this.tenis.length-1].id;
  }

  ngOnInit() {
    this.proTenis = {};
    // this.prod.obterProdutos().subscribe(res => {
    //   this.tenis = res;
    // });
  }

  obterTenis(): void {
    this.prod.obterProdutos().subscribe((res) => {
      this.tenis = res;

      //Após pegar a lista de produtos, a variável "idVar" recebe o valor do ID do último produto
      this.idVar = this.tenis[this.tenis.length - 1].id!;

      //Após isso, é somado 1 na variável "idVar" para que ela não fique com o valor do ID do último produto, o que poder dar erro na hora do cadastro. Essa parte foi feita apenas para que o usuário não tenha que ficar digitando o ID do produto.
      this.idVar++;
    });
  }

  adicionarTenis(frm: NgForm): void {
    //É definido o ID do "proTenis" que será cadastrado. Os outros valores, como nome e quantidade, estão definidos no HTML do componente
    this.proTenis.id = this.idVar;
    console.log(this.proTenis)
    this.prod.adicionaProduto(this.proTenis).subscribe((res) => {
      // this.prod.mensagem('Produto Criado !!');

      //Aqui, a variável "msg" recebe o resultado do cadastro, se deu certo ou não
      this.msg = res.msg;
      frm.reset();
    });
  }
}
