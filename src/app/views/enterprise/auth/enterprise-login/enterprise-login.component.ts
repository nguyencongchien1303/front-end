import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { User } from "src/app/_model/user.model";
import { AuthService } from "src/app/_services/auth.service";

@Component({
  selector: "app-enterprise-login",
  templateUrl: "./enterprise-login.component.html",
  styleUrls: ["./enterprise-login.component.scss"],
})
export class EnterpriseLoginComponent implements OnInit {
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

  onLogin() {
    this.authService
      .loginEnterprise(
        this.loginTypeForm.value.name,
        this.loginTypeForm.value.password
      )
      .subscribe(
        (res: User) => {
          localStorage.setItem("token_enterprise", res.jwtToken);
          localStorage.setItem("user_enterprise_data", JSON.stringify(res));
          this.router.navigate(["/enterprise/dashboard"]);
        },
        (err) => this.toastr.show(err)
      );
  }
}
