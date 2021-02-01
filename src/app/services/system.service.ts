import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  // Esta Loading
  private isLoading = false;

  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController,
  ) { }



  /**
   * Muestra un Loading por tiempo infinito.
   * @param message Mensaje a mostrar en el Loading
   */
  public async showLoader(message: string) {
    this.isLoading = true;
    return await this.loadingController.create({
      message
      // duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  /**
   * Oculta el Loading si ya se ha creado, de lo contrario, devolvera el error.
   */
  public async hideLoader() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  /**
   * Muestra un alert con el Titulo y el Mensaje y un boton de OK.
   * @param header Titulo
   * @param message Mensaje
   */
  public async showAlert(header: string, message: string, buttons: string[] | any[]) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons
    });

    await alert.present();
  }

  /**
   * Metodo para garantizar el error. Si es de tipo nativo o contiene un error de la API.
   * @param error Error para comprobar
   */
  public garanticeError(error: HttpErrorResponse) {
    let messageError: string;
    // Si el error.error es null es error HttpErrorResponse si no es null contiene un ErrorRequest Error de la API
    if (error.error !== null && (error.error.description !== null || error.error.description !== undefined)) {
      messageError = error.error.description;
    } else {
      messageError = '<strong>Message: </strong>' + error.message + '<br><strong>Status: </strong>' + error.status + '<br><strong>StatusText: </strong>' + error.statusText + '<br><strong>Url: </strong>' + error.url;
    }
    // Mostrar el Error
    this.showAlert('Error', messageError, ['Aceptar']);
  }

}
