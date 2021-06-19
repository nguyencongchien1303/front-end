import { Component, OnChanges, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-enterprise-auth-signup",
  templateUrl: "./enterprise-auth-signup.component.html",
  styleUrls: ["./enterprise-auth-signup.component.scss"],
})
export class EnterpriseAuthSignupComponent implements OnInit {
  phase: number;
  form_title: string;
  constructor(private location: Location) {
    this.phase = 0;
    this.form_title = "Thông tin tài khoản";
  }
  signUpTypeForm = new FormGroup({
    email: new FormControl(),
    phone: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
    nameEnterprise: new FormControl(),
    address: new FormControl(),
    businessAreas: new FormControl(),
    position: new FormControl(),
    taxCode: new FormControl(),
    businessType: new FormControl(),
    knowFrom: new FormControl(),
    website: new FormControl(),
    description: new FormControl(),
  });

  ngOnInit(): void {}

  changeTitle() {
    switch (this.phase) {
      case 0:
        this.form_title = "Thông tin tài khoản";
        break;
      case 1:
        this.form_title = "Thông tin doanh nghiệp";
        break;
      case 2:
        this.form_title = "Thông tin kinh doanh";
        break;
    }
  }

  onBack() {
    if (this.phase > 0) {
      this.phase -= 1;
      this.changeTitle();
    } else {
      this.location.back();
    }
  }

  onNext() {
    if (this.phase < 3) {
      this.phase += 1;
    }
    this.changeTitle();
  }

  onFinish() {
    this.location.back();
  }
}
