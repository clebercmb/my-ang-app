import { Component, OnInit } from '@angular/core';
import { DeptData } from '../shared/department.service';
import { UserData } from '../shared/userdata.service';

@Component({
  selector: 'app-mainapp',
  templateUrl: './mainapp.component.html',
  styleUrls: ['./mainapp.component.scss'],
})
export class MainappComponent implements OnInit {
  userData;
  deptData;

  constructor(private ud: UserData, private dp: DeptData) {
    this.userData = this.ud.loadUsers();
    this.deptData = this.dp.loadDept();
  }

  ngOnInit(): void {}
}
