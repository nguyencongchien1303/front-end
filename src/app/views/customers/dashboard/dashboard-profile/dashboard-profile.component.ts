import { UserService } from "./../../../../../../src/app/_services/user.service";
import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { User } from "../../../../_model/user.model";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-dashboard-profile",
  templateUrl: "./dashboard-profile.component.html",
  styleUrls: ["./dashboard-profile.component.scss"],
})
export class DashboardProfileComponent implements OnInit {
  constructor(
    private datePipe: DatePipe,
    private userService: UserService,
    private toastr: ToastrService
  ) {}
  updateUserTypeForm = new FormGroup({
    name: new FormControl(),
    birthDate: new FormControl(),
    phone: new FormControl(),
    gender: new FormControl(),
    address: new FormControl(),
  });
  userInfo: any;
  userUpdate: User;
  a;
  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem("user_data"));
    this.getDataUser(this.userInfo.id);
  }
  getDataUser(id) {
    this.userService.apiGetUserId(id).subscribe((res: User) => {
      localStorage.setItem("user_data_update", JSON.stringify(res));
      this.updateUserTypeForm.setValue({
        name: res.name,
        birthDate: this.datePipe.transform(res.birthDate, "yyyy-MM-dd"),
        phone: res.phone,
        gender: res.gender,
        address: res.address,
      });
    });
  }
  onUpdate() {
    console.log(this.userInfo.id);
    var body = {
      id: this.userInfo.id,
      name: this.updateUserTypeForm.value.name,
      birthDate: this.updateUserTypeForm.value.birthDate,
      phone: this.updateUserTypeForm.value.phone,
      gender: this.updateUserTypeForm.value.gender,
      address: this.updateUserTypeForm.value.address,
    };
    console.log(body);
    this.userService.apiPutUserId(this.userInfo.id, body).subscribe((res) => {
      this.toastr.success("Cập nhật thành công");
      this.getDataUser(this.userInfo.id);
    });
  }
}
