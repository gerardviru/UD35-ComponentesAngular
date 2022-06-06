import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-Clientes',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class formulariocomponent implements OnInit {

  @Input() Clientes: any;

  constructor() { }

  ngOnInit(): void {
  }
}
