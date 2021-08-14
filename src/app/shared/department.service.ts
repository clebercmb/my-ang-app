import { Injectable } from '@angular/core';

@Injectable()
export class DeptData {
  loadDept() {
    return ['Dept 1', 'Dept 2', 'Dept 3'];
  }
}
