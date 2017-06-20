export class Contacto {

  constructor(
    public id: number,
    public nombre: string,
    public apellidos?: string,
    public movil?: string,
    public email?: string,
    public facebook?: string,
    public twitter?: string) { }

  // Creamos una nueva instancia de tipo 'Contacto' a
  // partir de un objeto JSON.
  static nuevoDesdeJson(json: any): Contacto {
    return new Contacto(
      json.id,
      json.nombre,
      json.apellidos,
      json.movil,
      json.email,
      json.facebook,
      json.twitter
    );
  }

  // Creamos un nuev array de instancias de tipo 'Contacto'
  // a partir de un array de objetos JSON.
  static nuevaColeccionDesdeJson(json: any[]): Contacto[] {
    return json.map((contactoJson: any): Contacto => {
      return Contacto.nuevoDesdeJson(contactoJson);
    });
  }
}
