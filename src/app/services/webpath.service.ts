import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebpathService {
  // Opciones Menu
  public static MENU = 'assets/data/menu.json';
  // Login
  public static LOGIN = 'login';
  // Home
  public static HOME = 'home';
}
