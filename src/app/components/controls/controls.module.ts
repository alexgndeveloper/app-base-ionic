import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InputTextComponent } from './input-text/input-text.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    InputTextComponent,
    InputPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [
    InputTextComponent,
    InputPasswordComponent
  ]
})
export class ControlsModule { }
