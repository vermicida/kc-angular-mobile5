import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Contacto } from '../contacto';
import { ContactosService } from '../contactos.service';

@Component({
  selector: 'app-nuevo-contacto',
  templateUrl: './nuevo-contacto.component.html',
  styleUrls: ['./nuevo-contacto.component.css']
})
export class NuevoContactoComponent {

  constructor(
    private _contactosService: ContactosService,
    private _router: Router) { }

  guardarContacto(contacto: Contacto): void {
    this._contactosService
        .agregarContacto(contacto)
        .subscribe(() => {
          alert('El contacto se ha creado correctamente :-)');
          this._router.navigate(['/mis-contactos']);
        });
  }

}
