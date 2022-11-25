import { AuthService } from './login/auth.service';
import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  //Esta variável é do Collapse, o botão que aparece quando a tela é muita pequena (celular, por exemplo) e o menu não pode ser exibido direito. Está variável controla o collapse para que o botão possa funcionar.
  isCollapsed: boolean = true;
  name = "Angular " + VERSION.major;

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

}
