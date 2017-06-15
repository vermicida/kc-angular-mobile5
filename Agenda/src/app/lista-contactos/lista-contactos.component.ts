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

  // Comprobamos si el contacto indicado es Gates o Wozniak.
  esGatesWozniak(contacto: string): boolean {
    return contacto.indexOf('Gates') > -1 || contacto.indexOf('Wozniak') > -1;
  }

  // Comprobamos si el contacto indicado es Cook o Musk. En tal caso, retornamos
  // un tamaño de fuente de 32px. En caso contrario, de 14px.
  esCookMusk(contacto: string): string {
    return contacto.indexOf('Cook') > -1 || contacto.indexOf('Musk') > -1 ? '32px' : '14px';
  }
}
