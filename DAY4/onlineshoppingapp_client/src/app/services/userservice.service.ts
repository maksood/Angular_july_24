import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  isAuthenticated: boolean = false;
  constructor() {}

  getUserAuthenticated() {
    return this.isAuthenticated;
  }

  setUserAuthenticated() {
    this.isAuthenticated = true;
  }
}
