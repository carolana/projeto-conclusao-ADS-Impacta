import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './login/auth.service';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ExibirProdutosComponent } from "./exibir-produtos/exibir-produtos.component";
import { PesquisarProdutosComponent } from "./pesquisar-produtos/pesquisar-produtos.component";
import { ExcluirProdutoComponent } from "./excluir-produto/excluir-produto.component";
import { AtualizarProdutoComponent } from "./atualizar-produto/atualizar-produto.component";
import { AdicionarProdutoComponent } from "./adicionar-produto/adicionar-produto.component";
import { InicioComponent } from "./inicio/inicio.component";
import { AppRoutingModule } from "./app-routing.module";
import { ProdutosService } from "./modelo/produtos.service";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout/logout.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    ExibirProdutosComponent,
    PesquisarProdutosComponent,
    ExcluirProdutoComponent,
    AtualizarProdutoComponent,
    AdicionarProdutoComponent,
    InicioComponent,
    LoginComponent,
    LogoutComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    ProdutosService,
    AuthService,
    AuthGuard
  ]
})
export class AppModule {}
