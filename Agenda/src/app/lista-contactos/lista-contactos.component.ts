import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {

  // Con el decorador 'Input' exponemos atributos para
  // que puedan enlazar datos desde otros componentes.
  @Input() datos: string[];

  // Con el decorador 'Output' exponemos eventos a otros
  // componentes. Es necesario, además, que el atributo decorado sea de tipo 'EventEmitter<T>'.
  @Output() clickEnEliminar = new EventEmitter<string>();

  // Para emitir datos, usamos la función 'emit' del 'EventEmitter'.
  notificarEliminacion(dato: string): void {
    this.clickEnEliminar.emit(dato);
  }
}
