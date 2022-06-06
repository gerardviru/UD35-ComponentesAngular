import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clientes';

  name:string = '';
  cif:string = '';
  direccion:string = '';
  grupo:string = '';

  Clientes: Array<object>= [];

  GuardarClientes() {
    this.Clientes.push({name: this.name,
      cif: this.cif,
      direccion: this.direccion,
      grupo: this.grupo });

  }
}
