import { Injectable } from '@angular/core';

@Injectable()
export class UserData {
  loadUsers(): string[] {
    return ['admin', 'manager', 'QA'];
  }

  addUserToDB(user: any) {
    console.log('User added to the DB', user);
  }
}
