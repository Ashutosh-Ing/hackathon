import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit{

  signUpForm: FormGroup;

  ngOnInit(){
    this.signUpForm = new FormGroup({
      'username': new FormControl('null', Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    console.log(this.signUpForm);
    
  }
}
