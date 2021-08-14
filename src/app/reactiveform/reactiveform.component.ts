import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss'],
})
export class ReactiveformComponent implements OnInit {
  myForm: FormGroup;
  uname: FormControl;
  email: FormControl;
  city: FormControl;
  password: FormControl;

  createForm() {
    this.myForm = new FormGroup({
      uname: this.uname,
      email: this.email,
      password: this.password,
      city: this.city,
    });
  }

  createFormControls() {
    this.uname = new FormControl('');
    this.email = new FormControl('');
    this.password = new FormControl('');
    this.city = new FormControl('');
  }

  constructor() {}

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  addUser() {
    console.log('this.myForm.value=', this.myForm.value);
    alert('user is added: ' + this.myForm.value);
  }
}
