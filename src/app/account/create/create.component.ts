import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createAcForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createAcForm = new FormGroup({
      'bankname': new FormControl(null, Validators.required),
      'accountId': new FormControl(null, Validators.required),
      'currency': new FormControl(null, Validators.required),
      'balance': new FormControl(null, Validators.required)
    });
  }

  onSubmit(){

  }

}
