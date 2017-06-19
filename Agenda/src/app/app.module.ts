import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactosService } from './contactos.service';
import { FormularioAltaComponent } from './formulario-alta/formulario-alta.component';

@NgModule({
  // En 'declarations' indicamos todos los componentes, pipes y
  // directivas de mi aplicación.
  declarations: [
    AppComponent,
    ListaContactosComponent,
    FormularioAltaComponent
  ],
  // En 'imports' indicamos módulos de los cuáles dependemos.
  imports: [
    BrowserModule,
    FormsModule
  ],
  // En 'providers' indicamos los proveedores de todas aquellas
  // piezas que sean susceptibles de ser inyectadas como dependencias.
  providers: [
    ContactosService
  ],
  // En 'bootstrap' indicamos el componente raíz, que es el primero
  // que se instanciará y hará lo propio con el resto.
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
