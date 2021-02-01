import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service';
import { SystemService } from './system.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // Headers
  private headersToken: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + this.authSrv.getToken()
  });

  constructor(
    private http: HttpClient,
    private authSrv: AuthService,
    private systemSrv: SystemService
  ) { }

  /**
   * Metodo POST, devuelve los objetos de la API con los filtros que pasemos en el body.
   * @param url URL de la API
   * @param body Body con los filtros para buscar, vacio para recibir todo
   * @param onSuccess Funcion response, devuelve el resultado
   * @param headers Si lleva Cabecera la llamada (Si lleva token)
   * @param showLoading Muestra el Loading
   */
  public postHttpClient(url: string, body: any, onSuccess: (response: any) => void, headers: boolean = true, showLoading: boolean = true) {
    if (showLoading) {
      // Muestro Loading
      this.systemSrv.showLoader('Cargando ...');
    }

    this.http.post(url, body, headers === true ? { headers: this.newHeaders() } : undefined).subscribe(
      (response) => {
        if (showLoading) {
          // Oculto Loading
          this.systemSrv.hideLoader();
        }
        onSuccess(response);
      },
      (error) => {
        console.log('ERROR', error);

        if (showLoading) {
          // Oculto Loading
          this.systemSrv.hideLoader();
        }
        this.systemSrv.garanticeError(error);
      });
  }

  /**
   * Metodo GET, devuelve los objetos de la API.
   * @param url URL de la API
   * @param onSuccess Funcion response, devuelve el resultado
   * @param headers Si lleva Cabecera la llamada (Si lleva token)
   * @param showLoading Muestra el Loading
   */
  public getHttpClient(url: string, onSuccess: (response: any) => void, headers: boolean = true, showLoading: boolean = true) {
    // if (showLoading) {
    //   // Muestro Loading
    //   this.systemSrv.showLoader('Cargando ...');
    // }

    this.http.get(url, headers === true ? { headers: this.newHeaders() } : undefined).subscribe(
      (response: any) => {
        // if (showLoading) {
        //   // Oculto Loading
        //   this.systemSrv.hideLoader();
        // }
        onSuccess(response);
      },
      (error) => {
        // if (showLoading) {
        //   // Oculto Loading
        //   this.systemSrv.hideLoader();
        // }
        this.systemSrv.garanticeError(error);
      });
  }

  /**
   * Metodo PUT, guarda el objeto recibido como parametro en la BBDD.
   * @param url URL de la API
   * @param body Body con los filtros para buscar, vacio para recibir todo
   * @param onSuccess Funcion response, devuelve el resultado
   * @param headers Si lleva Cabecera la llamada (Si lleva token)
   * @param showLoading Muestra el Loading
   */
  public putHttpClient(url: string, body: any, onSuccess: (response: any) => void, headers: boolean = true, showLoading: boolean = true) {
    // if (showLoading) {
    //   // Muestro Loading
    //   this.systemSrv.showLoader('Cargando ...');
    // }

    return this.http.put(url, body, headers === true ? { headers: this.newHeaders() } : undefined).subscribe(
      (response) => {
        // if (showLoading) {
        //   // Oculto Loading
        //   this.systemSrv.hideLoader();
        // }
        onSuccess(response);
      },
      (error) => {
        // if (showLoading) {
        //   // Oculto Loading
        //   this.systemSrv.hideLoader();
        // }
        this.systemSrv.garanticeError(error);
      });
  }

  /**
   * Metodo newHeaders. Devuelve el headers con el token actualizado si se ha modificado.
   */
  private newHeaders(): HttpHeaders {
    if (this.headersToken.get('Authorization') !== 'Bearer ' + this.authSrv.getToken()) {
      this.headersToken = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.authSrv.getToken()
      });
    }
    return this.headersToken;
  }

}
