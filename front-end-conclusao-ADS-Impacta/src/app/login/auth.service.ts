import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router:Router) { }

  fazerLogin(usuario: Usuario){

    //TO-DO:CHAMAR SERVIÇO DE AUTENTICAÇÃO DO BACKEND QUANDO ESTIVER PRONTO
    if (usuario.nome === 'usuario@email.com' &&
      usuario.senha === '123456' ) {
        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true);

        this.router.navigate(['/inicio'])
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
    
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado
  }

  deslogar() {
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
  }

}
