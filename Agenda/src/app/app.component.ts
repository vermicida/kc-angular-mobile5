import { Component, OnInit } from '@angular/core';

@Component({
  // En 'selector' indicamos el elemento HTML donde se instanciará
  // este componente.
  selector: 'app-root',
  // En 'templateUrl' indicamos la ruta al template del componente.
  // Podríamos escribirlo inline en la propiedad 'template'.
  templateUrl: './app.component.html',
  // En 'styleUrls' indicamos las rutas de los documentos CSS que
  // contienen los estilos que afectan a este componente.
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contactos: string[];

  // En el hook 'OnInit' inicializamos los datos del componente.
  ngOnInit() {
    this.contactos = [
      'Tim Cook',
      'Bill Gates',
      'Elon Musk',
      'Steve Wozniak',
      'Sundar Pichai'
    ];
  }

  eliminarContacto(contacto: string): void {
    let posicion = this.contactos.indexOf(contacto);
    this.contactos.splice(posicion, 1);
  }

}
