import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, FormControl, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  formLogin: FormGroup;
  constructor( public fb: FormBuilder ) {
    this.formLogin = this.fb.group({
      name: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
   }

  ngOnInit() {
  }
  logSubmit(){
    console.log(this.formLogin.value);
  }
}
