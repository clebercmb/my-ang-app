import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  myCity = 'pune test';
  myFav = 'https://picsum.photos/300/200';

  addUser() {
    console.log('User is added');
  }

  @Input()
  isActive = true;
  myImg = '';

  constructor() {}

  ngOnInit(): void {}
}
