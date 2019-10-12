import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit{

  signUpForm: FormGroup;

  router: Router;

  authService: AuthService;

  constructor(router: Router, authService: AuthService){
    this.router = router;
    this.authService = authService;
  }

  ngOnInit(){
    this.signUpForm = new FormGroup({
      'username': new FormControl('null', Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    console.log(this.signUpForm);

    let login = this.authService.login(this.signUpForm.value.username, this.signUpForm.value.password);
    login.subscribe((response) => {
      console.log(response);
    }, error => {
      console.log(error);
    });

    this.router.navigateByUrl('dashboard');
  }
}
