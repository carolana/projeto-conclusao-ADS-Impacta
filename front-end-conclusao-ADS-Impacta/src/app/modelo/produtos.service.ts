import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProdutosService {
  private URL: string;

  constructor(private http: HttpClient) {
    this.URL = 'http://localhost:8080'; //URL Base do BackEnd
  }

  obterProdutos(): Observable<any> {
    return this.http.get<any>(`${this.URL}/produtos`); //URL para Obter todos os Produtos. Método GET
  }

  pesquisarProdutoId(id: any): Observable<any> {
    return this.http.get<any>(`${this.URL}/produtos/${id}`); //URL para "Pegar" o Produto pelo ID. Método GET
  }

  atualizarProdutoId(prod: any): Observable<any> {

    const body = {
      id: prod.id,
      nome: prod.nome,
      tipo: prod.tipo,
      tamanho: prod.tamanho,
      quantidade: prod.quantidade,
      preco: prod.preco,
  };

    return this.http.put<any>(`${this.URL}/produtos`, body); //URL para Atualizar um Produto no qual é passado um Produto com as novas informações. Método PUT (Objeto TODO) é diferente do Método PATCH (PARTE do Objeto).
  }

  adicionaProduto(prod: any): Observable<any> {

    const body = {
        id: prod.id,
        nome: prod.nome,
        tipo: prod.tipo,
        tamanho: prod.tamanho,
        quantidade: prod.quantidade,
        preco: prod.preco,
    };

    return this.http.post<any>(`${this.URL}/produtos`, body); //URL para Adicionar um Novo Produto. Método POST
  }

  excluiProdutoId(id: any): Observable<any> {

    
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: id,
        nome: "",
        tipo: "",
        tamanho: 0,
        quantidade: 0,
        preco: 0,
      },
    };

    return this.http.request<any>('delete',`${this.URL}/produtos`, options); //URL para Deletar um Produto pelo ID. Método DELETE
  }
}
