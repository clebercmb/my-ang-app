import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserData } from '../shared/userdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  shoppingCart = ['soap', 'electronics', 'wheel'];
  userData;

  addUser(nf: NgForm) {
    console.log('User is added:', nf.value);
    this.userData.addUserToDB(nf.value);
  }

  constructor(private ud: UserData) {
    this.userData = ud;
  }

  ngOnInit(): void {}
}
