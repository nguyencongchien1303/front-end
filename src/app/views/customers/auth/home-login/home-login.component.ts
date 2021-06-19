import { User } from "../../../../_model/user.model";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../../../_services/auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-home-login",
  templateUrl: "./home-login.component.html",
  styleUrls: ["./home-login.component.scss"],
})
export class HomeLoginComponent implements OnInit {
  dataUser: User[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}
  loginTypeForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {}

  onSubmit() {
    this.authService
      .login(this.loginTypeForm.value.name, this.loginTypeForm.value.password)
      .subscribe(
        (res: User) => {
          localStorage.setItem("token", res.jwtToken);
          localStorage.setItem("user_data", JSON.stringify(res));
          this.router.navigate(["/customer/dashboard"]);
        },
        (err) => this.toastr.show(err)
      );
  }
}
