import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate } from '@angular/router';

interface Login {
  login: string;
  password: string;
}

@Injectable()
export class RoutingGuard implements CanActivate {
  authorized = false;

  canActivate() {
    if (!this.authorized) {
      alert('UnAuth Access');
    }

    return this.authorized;
    //return false;
  }

  validateLogin({ login, password }: Login) {
    this.authorized = true;
    return this.authorized;
  }
}
