import { Injectable } from '@angular/core';

// Un servicio es una clase decorada con 'Injectable'. Este decorador
// no necesita que le indiquemos ningún metadato. Es importante que no
// nos olvidemos de añadir el servicio en la colección de 'providers'
// del módulo de nuesta aplicación.
@Injectable()
export class ContactosService {

  private _contactos: string[];

  constructor() {
    this._contactos = [
      'Tim Cook',
      'Bill Gates',
      'Elon Musk',
      'Steve Wozniak',
      'Sundar Pichai'
    ];
  }

  obtenerContactos(): string[] {
    return this._contactos;
  }

  eliminarContacto(contacto: string): void {
    let posicion = this._contactos.indexOf(contacto);
    this._contactos.splice(posicion, 1);
  }

}
