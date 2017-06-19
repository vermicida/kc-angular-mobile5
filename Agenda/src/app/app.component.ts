import { Component, OnInit } from '@angular/core';

import { ContactosService } from './contactos.service';

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

  // Para hacer una inyeccción de dependencias necesitamos sí o sí
  // hacerlo en el constructor de una clase. Tenemos que indicar un
  // parámetro con un modificador de acceso (obligatorio). Además,
  // tenemos que anotar su tipo, que no es otro que el servicio a
  // inyectar.
  constructor(private _contactosService: ContactosService) { }

  // En el hook 'OnInit' inicializamos los datos del componente.
  ngOnInit() {
    this.contactos = this._contactosService.obtenerContactos();
  }

  eliminarContacto(contacto: string): void {
    this._contactosService.eliminarContacto(contacto);
    this.contactos = this._contactosService.obtenerContactos();
  }

}
