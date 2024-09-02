import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/userservice.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  constructor(public router: Router, public userServObject: UserService) {}

  ngOnInit() {}
  AuthenticateUser() {
    // authenticate the user using user Service
    if (this.username == "admin" && this.password == "admin") {
      this.userServObject.setUserAuthenticated();
      // redirect to dashboard
      this.router.navigate(["/dashboard"]);
    }
  }
}
