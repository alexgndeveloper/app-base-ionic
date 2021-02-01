import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  // Label
  @Input() label: string;
  // "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "light" | "medium" | "dark"
  @Input() color = 'primary';
  // "button" | "reset" | "submit"
  @Input() type = 'button';
  // Deshabilitado
  @Input() disabled = false;
  // "block" | "full" | undefined
  @Input() expand: string;
  // "clear" | "default" | "outline" | "solid" | undefined
  @Input() fill: string;
  // "round" | undefined
  @Input() shape: string;
  // "default" | "large" | "small" | undefined
  @Input() size: string;
  // Nombre Icono
  @Input() iconName: string;
  // Posicion Icono 'start | 'end' | 'icon-only'
  @Input() iconPosition: string;

  constructor() { }

  ngOnInit() { }

}
