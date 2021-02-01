import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
})
export class InputPasswordComponent implements OnInit {
  // FormControl
  @Input() control: FormControl = new FormControl();
  // Label, tambien se usa para el Error
  @Input() label = 'Contraseña';
  // Posicion Label "fixed" | "floating" | "stacked" | undefined
  @Input() labelPosition = 'floating';
  // Nombre Icono
  @Input() iconName = 'key-outline';
  // Posicion Icono 'start | 'end' | 'primary' | 'secondary'
  @Input() iconPosition = 'start';
  // Limpiar Input
  @Input() cleanInput = true;
  // Linea Item "full" | "inset" | "none" | undefined
  @Input() linesItem = 'none';
  // Mostrar Contraseña
  @Input() showPassword = true;

  // Ocultar Password
  public hide = true;

  constructor() { }

  ngOnInit() { }

}
