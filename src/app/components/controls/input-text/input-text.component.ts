import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
  // FormControl
  @Input() control: FormControl = new FormControl();
  // Label, tambien se usa para el Error
  @Input() label: string;
  // Posicion Label "fixed" | "floating" | "stacked" | undefined
  @Input() labelPosition = 'floating';
  // Nombre Icono
  @Input() iconName: string;
  // Posicion Icono 'start | 'end' | 'primary' | 'secondary'
  @Input() iconPosition = 'start';
  // Limpiar Input
  @Input() cleanInput = true;
  // Linea Item "full" | "inset" | "none" | undefined
  @Input() linesItem = 'none';

  constructor() { }

  ngOnInit() { }

}
