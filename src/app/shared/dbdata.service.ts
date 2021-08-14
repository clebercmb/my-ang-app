import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DBService {
  constructor(private http: HttpClient) {}

  addUserToDB(userData: any) {
    this.http.post('https://slde.com/data.json', userData).subscribe((data) => {
      console.log(data);
    });
  }
}
