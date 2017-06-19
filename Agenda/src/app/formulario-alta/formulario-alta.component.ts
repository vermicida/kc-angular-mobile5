import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Contacto } from '../contacto';

@Component({
  selector: 'formulario-alta',
  templateUrl: './formulario-alta.component.html',
  styleUrls: ['./formulario-alta.component.css']
})
export class FormularioAltaComponent {

  @Output() clickEnGuardar = new EventEmitter<Contacto>();

  notificarContacto(formulario: FormGroup): void {
    let contacto = new Contacto(
      formulario.value.nombre,
      formulario.value.apellidos,
      formulario.value.movil,
      formulario.value.email,
      formulario.value.facebook,
      formulario.value.twitter
    );
    this.clickEnGuardar.emit(contacto);
    formulario.reset();
  }

}
