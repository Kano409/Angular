import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  //2. check if have a permission or not, if not then redirect at another page
  isAdminRight(): boolean {
    //5. change here for permission
    return false;
  }
}
