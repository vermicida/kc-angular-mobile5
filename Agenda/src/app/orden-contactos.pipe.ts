import { Pipe, PipeTransform } from '@angular/core';

import { Contacto } from './contacto';

// Un pipe es una clase decorada con 'Pipe'. Es necesario que indiquemos el
// metadato 'name', ya que es el identificador del pipe que usaremos en los
// templates para usarlo. Un pipe tiene que implementar siempre la interfaz
// 'Pipetransform', que a su vez nos obliga a implementar la función 'transform'.
@Pipe({
  name: 'OrdenContactos'
})
export class OrdenContactosPipe implements PipeTransform {

  // En 'transform' siempre vendrá dado al menos un parámetro: el dato que
  // va a sufrir la transformación.
  transform(contactos: Contacto[]): Contacto[] {

    let ordenados: Contacto[];

    // Si la colección de contactos tiene valores.
    if (contactos) {

      // La ordenamos indicando una función de ordenación.
      ordenados = contactos.sort((contactoA: Contacto, contactoB: Contacto): number => {

        let resultado: number;

        // Si el nombre del contacto A es mayor que el nombre del contacto B, significa
        // que la ordenación A-Z es correcta y por tanto, como resultado de la comparación,
        // retornamos 1.
        if (contactoA.nombre > contactoB.nombre) {
          resultado = 1;
        }

        // Si el nombre del contacto B es mayor que el nombre del contacto A, significa
        // que la ordenación A-Z es incorrecta y por tanto, como resultado de la comparación,
        // retornamos -1.
        else if (contactoA.nombre < contactoB.nombre) {
          resultado = -1;
        }

        // Si el nombre del contacto A es igual que el nombre del contacto B, significa
        // que la ordenación A-Z es correcta porque son iguales, y por tanto, como resultado
        // de la comparación, retornamos 0.
        else {
          resultado = 0;
        }

        return resultado;
      });
    }

    // Si la colección de contactos es nula.
    else {
      ordenados = [];
    }

    return ordenados;
  }

}
