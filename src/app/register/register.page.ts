import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators, ValidatorFn} from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegister: FormGroup;
  validators: Array<ValidatorFn> = [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(48),
  ];
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(public fb: FormBuilder, private httpService: HttpService) {
    this.formRegister = this.fb.group({
      name: new FormControl('', this.validators),
      password: new FormControl('',this.validators),
      email: new FormControl('',this.validators.concat([Validators.email]))
    });
   }

  ngOnInit() {
  }
  registerSubmit(){
    const { name, password, email } = this.formRegister.value;
    console.log(this.formRegister.value);
    console.log(name + ' and ' + password);
    this.httpService.register(name, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
