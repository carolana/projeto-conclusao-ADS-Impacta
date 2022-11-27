import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ExibirProdutosComponent } from './exibir-produtos/exibir-produtos.component';
import { ExcluirProdutoComponent } from './excluir-produto/excluir-produto.component';
import { AdicionarProdutoComponent } from './adicionar-produto/adicionar-produto.component';
import { AtualizarProdutoComponent } from './atualizar-produto/atualizar-produto.component';
import { PesquisarProdutosComponent } from './pesquisar-produtos/pesquisar-produtos.component';
import { LogoutComponent } from './logout/logout/logout.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard] },
  { path: 'lista', component: ExibirProdutosComponent, canActivate: [AuthGuard] },
  { path: 'excluir', component: ExcluirProdutoComponent, canActivate: [AuthGuard] },
  { path: 'adicionar', component: AdicionarProdutoComponent, canActivate: [AuthGuard] },
  { path: 'atualizar', component: AtualizarProdutoComponent, canActivate: [AuthGuard] },
  { path: 'pesquisar', component: PesquisarProdutosComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio', },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
