import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { User } from "src/app/_model/user.model";
import { UserService } from "src/app/_services/user.service";

@Component({
  selector: "app-dashboard-layout",
  templateUrl: "./dashboard-layout.component.html",
  styleUrls: ["./dashboard-layout.component.scss"],
})
export class DashboardLayoutComponent implements OnInit, OnChanges {
  constructor(private userService: UserService) {}
  userInfo: any;
  name: String = "Name";
  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem("user_data"));
    this.getDataUser(this.userInfo.id);
  }
  getDataUser(id) {
    this.userService.apiGetUserId(id).subscribe((res: User) => {
      this.name = res.name;
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
