import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // Titulo
  @Input() title: string;
  // Mostrar Boton de Atras
  @Input() backButton = true;
  // Mostrar Boton de Menu
  @Input() menuButton = false;
  // Icono del Boton, si no viene Icono no se muestra el boton
  @Input() iconButton: string;
  // Color del Boton
  @Input() colorButton = 'secondary';
  // Deshabilitar Boton
  @Input() disabledButton = false;
  // Evento Click del Boton
  @Output() public clickButton = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

}
