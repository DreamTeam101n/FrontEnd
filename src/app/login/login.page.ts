import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, FormControl, Validators, NgForm, ValidatorFn } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { TokenStorageService } from '../services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  formLogin: FormGroup;
  validators: Array<ValidatorFn> = [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(48),
  ];
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  constructor( public fb: FormBuilder, private httpService: HttpService, private token: TokenStorageService) {
    this.formLogin = this.fb.group({
      name: new FormControl('',this.validators),
      password: new FormControl('',this.validators)
    });
   }

  ngOnInit() {
    if (this.token.getToken()) {
      this.isLoggedIn = true;
    }
  }
  logSubmit(){
    const { name, password } = this.formLogin.value;
    this.httpService.login(name, password).subscribe({
      next: data => {
        console.log(data);
        this.token.saveToken(data.token);
        this.token.saveUser(data.userInfo);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        /*window.location.reload();*/
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoggedIn = true;
      },
    });
  }
}
