import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { environment } from '../environments/environment';

import { Contacto } from './contacto';

// Un servicio es una clase decorada con 'Injectable'. Este decorador
// no necesita que le indiquemos ningún metadato. Es importante que no
// nos olvidemos de añadir el servicio en la colección de 'providers'
// del módulo de nuesta aplicación.
@Injectable()
export class ContactosService {

  constructor(private _http: Http) { }

  obtenerContactos(): Observable<Contacto[]> {

    // El cliente HTTP trabaja con objetos 'Response'. Este objeto tiene datos relacionados
    // con la respuesta del servidor: cabeceras, status, body, etc. Nunca debemos subir este
    // objeto a la capa de arriba (componentes). Por tanto, debemos transformar este objeto
    // en el que realmente nos ha pedido el componente, que es este caso es 'Contacto[]'; para
    // hacer esta operación nos apoyamos en la función 'map', que es un operador de los objetos
    // 'Observables'. Este operador transforma un 'Observable' en otro.

    return this._http
               .get(`${environment.apiUri}/contactos`)
               .map((respuesta: Response) => {
                 return Contacto.nuevaColeccionDesdeJson(respuesta.json());
               });
  }

  agregarContacto(contacto: Contacto): Observable<Contacto> {

    // En aquellas peticiones HTTP que envíen datos a servidor (POST, PUT, PATCH), debemos
    // indicarlos (los datos) como segundo parámetro de la función correspondiente. En este caso,
    // estamos enviando el contacto a crear en el cuerpo de la petición 'post'.

    return this._http
               .post(`${environment.apiUri}/contactos`, contacto)
               .map((respuesta: Response) => {
                 return Contacto.nuevoDesdeJson(respuesta.json());
               });
  }

  eliminarContacto(contacto: string): void {
    //let posicion = this._contactos.indexOf(contacto);
    //this._contactos.splice(posicion, 1);
  }

}
