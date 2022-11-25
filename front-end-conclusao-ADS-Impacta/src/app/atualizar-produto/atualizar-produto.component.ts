import { Component, OnInit } from '@angular/core';
import { Produtos } from '../modelo/produtos';
import { ProdutosService } from '../modelo/produtos.service';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css'],
})

//Este componente atualiza o Produto através do ID
export class AtualizarProdutoComponent implements OnInit {
  tenis: Produtos[];

  constructor(private prod: ProdutosService) {
    this.tenis = [];

    //Como nos outros componentes, a lista de tênis é trazida para que o usuário escolha o tênis que quer modificar
    this.obterTenis();
  }

  ngOnInit() {}
  obterTenis(): void {
    this.prod.obterProdutos().subscribe((res) => {
      return (this.tenis = res);
    });
  }

  atualizarTenis(form: any): void {
    //É passado o form para a função e é pego os valores dos input's
    let info = form.value;

    //Os valores serão utilizados para criar um novo Produto. O único valor que o usuário não poderá modificar é o ID do produto, porque esse valor será utilizado para identificar o produto na lista no Repl.it
    let tn: Produtos = {
      nome: info.nome,
      tipo: info.tipo,
      tamanho: info.tamanho,
      quantidade: info.quantidade,
      preco: info.preco,
      id: info.prod,
    };

    //A função do Serviço é chamada e é passado o novo produto com as novas informações mas o mesmo ID.
    this.prod.atualizarProdutoId(tn).subscribe((res) => {
      console.log(res.msg);
    });
  }
}
