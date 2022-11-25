import { Usuario } from './usuario';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  msgError = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  
   
  }

  fazerLogin() {
    //onsole.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
    this.msgError = "Usuário ou senha incorretos!"
  }

}
