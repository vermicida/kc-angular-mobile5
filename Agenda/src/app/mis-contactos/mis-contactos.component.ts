import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Contacto } from '../contacto';
import { ContactosService } from '../contactos.service';

@Component({
  selector: 'app-mis-contactos',
  templateUrl: './mis-contactos.component.html',
  styleUrls: ['./mis-contactos.component.css']
})
export class MisContactosComponent implements OnInit {

  contactos$: Observable<Contacto[]>;

  // Para hacer una inyeccción de dependencias necesitamos sí o sí
  // hacerlo en el constructor de una clase. Tenemos que indicar un
  // parámetro con un modificador de acceso (obligatorio). Además,
  // tenemos que anotar su tipo, que no es otro que el servicio a
  // inyectar.
  constructor(private _contactosService: ContactosService) { }

  // En el hook 'OnInit' inicializamos los datos del componente.
  ngOnInit() {
    this.contactos$ = this._contactosService.obtenerContactos();
  }

}
