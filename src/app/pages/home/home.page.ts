import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';
import { WebpathService } from 'src/app/services/webpath.service';

import { OptionMenu } from 'src/app/models/option-menu.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public optionsMenu: OptionMenu[] = [];

  constructor(
    private httpSrv: HttpService,
    public authSrv: AuthService
  ) { }

  ngOnInit() {

    console.log('USER', this.authSrv.user);


    this.httpSrv.getHttpClient(WebpathService.MENU, (responseOptionsMenu: OptionMenu[]) => {
      this.optionsMenu = responseOptionsMenu;
    }, true, false);
  }

}
