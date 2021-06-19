import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { SignUpService } from "src/app/_services/sign_up.service";
import { User } from "src/app/_model/user.model";
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  dataUser;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private signUp: SignUpService
  ) {}
  signUpTypeForm = new FormGroup({
    name: new FormControl(),
    username: new FormControl(),
    phoneNumber: new FormControl(),
    password: new FormControl(),
    passwordConfirm: new FormControl(),
  });
  ngOnInit(): void {
    // this.toastr.success('Tạo mới thành công', '');
  }
  submit() {
    this.dataUser = this.signUpTypeForm.value;
    console.log(this.dataUser);
    this.signUp
      .signUp(
        this.dataUser.name,
        this.dataUser.username,
        this.dataUser.phoneNumber,
        this.dataUser.password
      )
      .subscribe(
        (res: User) => {
          this.router.navigate(["/customer/login"]);
          this.toastr.success("Tạo mới thành công ^^", "");
        },
        (err) => this.toastr.show(err)
      );
  }
}
