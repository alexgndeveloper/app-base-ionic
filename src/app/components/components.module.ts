import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ControlsModule } from './controls/controls.module';
import { ButtonsModule } from './buttons/buttons.module';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    ControlsModule,
    ButtonsModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    ControlsModule,
    ButtonsModule
  ]
})
export class ComponentsModule { }
