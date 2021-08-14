import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  companyName = 'My company name';
  myName = 'Cleber';

  userdata = {
    uname: 'Admin',
    income: 456787,
    rating: 4.9876,
    DOJ: new Date('11/11/2021'),
    details: '',
  };
}
