import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoutingGuard } from '../guarddemo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  routingGuard: RoutingGuard;

  constructor(private rg: RoutingGuard) {
    this.routingGuard = rg;
  }

  validatedLogin(nf: NgForm) {
    console.log('Logging validated:', nf.value);
    this.routingGuard.validateLogin(nf.value);
  }

  ngOnInit(): void {}
}
