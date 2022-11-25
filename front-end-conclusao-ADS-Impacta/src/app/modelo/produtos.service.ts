import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProdutosService {
  private URL: string;

  constructor(private http: HttpClient) {
    //TO-DO: COLOCAR URL QUANDO DISPONIBILIZADA E VERIFICAR MEOTÓDOS
    this.URL = ''; //Link Base do BackEnd
  }

  obterProdutos(): Observable<any> {
    return this.http.get<any>(`${this.URL}/produtos`); //Link para Obter todos os Produtos. Método GET
  }

  pesquisarProdutoId(id: any): Observable<any> {
    return this.http.get<any>(`${this.URL}/produtos/${id}`); //Link para "Pegar" o Produto pelo ID. Método GET
  }

  atualizarProdutoId(prod: any): Observable<any> {
    return this.http.put<any>(`${this.URL}/produtos`, prod); //Link para Atualizar um Produto no qual é passado um Produto com as novas informações. Método PUT (Objeto TODO) é diferente do Método PATCH (PARTE do Objeto).
  }

  adicionaProduto(prod: any): Observable<any> {
    return this.http.post<any>(`${this.URL}/produtos`, prod); //Link para Adicionar um Novo Produto. Método POST
  }

  excluiProdutoId(id: any): Observable<any> {
    return this.http.delete<any>(`${this.URL}/produtos/${id}`); //Link para Deletar um Produto pelo ID. Método DELETE
  }
}
