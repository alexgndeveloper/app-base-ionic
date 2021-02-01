import { Injectable } from '@angular/core';

import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;

  constructor() { }

  /**
   * Obtener el Id del Usuario.
   */
  public getIdUser(): number {
    return this.user.id;
  }

  /**
   * Guardar Token en la Memoria del Navegador.
   * @param token Token a guardar
   */
  public setToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  /**
   * Obtener Token de la Memoria del Navegador.
   */
  public getToken(): string {
    return localStorage.getItem('accessToken');
  }

  /**
   * Enviamos si el usuario esta loggeado.
   */
  public isUserLogged(): boolean {
    let result = false;
    if (this.user) {
      result = true;
    }
    return result;
  }

  /**
   * Metodo para cerrar sesion usuario.
   */
  public logout() {
    this.user = undefined;
    localStorage.removeItem('accessToken');
  }

}
