import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { WebpathService } from 'src/app/services/webpath.service';

import { User } from 'src/app/models/user.class';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Formulario
  public formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private httpSrv: HttpService,
    private systemSrv: SystemService,
    private authSrv: AuthService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public login() {
    // Usuario y Contraseña
    const body: User = this.formGroup.getRawValue();
    body.id = 1;

    if (body.username === 'admin' && body.password === '1234') {
      // Asgino Usuario
      this.authSrv.user = Object.assign(new User(), body);
      // Guardo el Token en Storage del Navegador
      this.authSrv.setToken('1234');
      // Navego Home
      this.router.navigate([WebpathService.HOME]);
    }
  }

}
