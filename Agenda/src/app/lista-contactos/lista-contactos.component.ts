import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Contacto } from '../contacto';

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {

  // Con el decorador 'Input' exponemos atributos para
  // que puedan enlazar datos desde otros componentes.
  @Input() datos: Contacto[];

  // Con el decorador 'Output' exponemos eventos a otros
  // componentes. Es necesario, además, que el atributo decorado sea de tipo 'EventEmitter<T>'.
  @Output() clickEnEliminar = new EventEmitter<Contacto>();

  // Para emitir datos, usamos la función 'emit' del 'EventEmitter'.
  notificarEliminacion(dato: Contacto): void {
    this.clickEnEliminar.emit(dato);
  }

  // Obtenemos el nombre completo de un contacto concatenando su nombre y apellidos.
  obtenerNombreCompleto(dato: Contacto): string {
    return `${dato.nombre} ${dato.apellidos}`;
  }
}
