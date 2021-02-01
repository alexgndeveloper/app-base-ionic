import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';
import { WebpathService } from 'src/app/services/webpath.service';

import { OptionMenu } from 'src/app/models/option-menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public optionsMenu: OptionMenu[] = [];

  constructor(
    private httpSrv: HttpService,
    public authSrv: AuthService
  ) { }

  ngOnInit() {
    this.httpSrv.getHttpClient(WebpathService.MENU, (responseOptionsMenu: OptionMenu[]) => {
      this.optionsMenu = responseOptionsMenu;
    }, true, false);
  }

}
