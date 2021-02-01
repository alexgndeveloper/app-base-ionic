import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { AlertController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

    private location: Location,
    public alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      if (this.location.isCurrentPathEqualTo('/home') || this.location.isCurrentPathEqualTo('/login')) {
        // Show Exit Alert!
        this.showExitConfirm();
        processNextHandler();
      } else {
        // Navigate to back page
        this.location.back();
      }
    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      this.alertController.getTop().then(r => {
        if (r) {
          (navigator as any).app.exitApp();
        }
      }).catch(e => {
        console.log(e);
      });
    });

  }

  private showExitConfirm() {
    this.alertController.create({
      header: 'Salir de la Aplicación',
      message: '¿Quieres cerrar la aplicación?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => { }
        }, {
          text: 'Salir',
          handler: () => {
            (navigator as any).app.exitApp();
          }
        }
      ]
    }).then(alert => {
      alert.present();
    });
  }

}
