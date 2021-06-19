import { User } from "./../../../../../../src/app/_model/user.model";
import { OrderService } from "./../../../../_services/order.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard-history",
  templateUrl: "./dashboard-history.component.html",
  styleUrls: ["./dashboard-history.component.scss"],
})
export class DashboardHistoryComponent implements OnInit {
  constructor(private orderService: OrderService, private router: Router) {}
  idUser: String;
  dataUser: any = [];
  ngOnInit(): void {
    this.idUser = JSON.parse(localStorage.getItem("user_data")).id;
    console.log(this.idUser);
    this.getData();
  }
  getData() {
    this.orderService.orderHistoryGetId(this.idUser).subscribe((res: User) => {
      this.dataUser = res;
      console.log(this.dataUser);
    });
  }
  onReviews() {
    console.log(this.dataUser[0].id);

    this.router.navigate([
      `/customer/dashboard/history/history-reviews/${this.dataUser[0].id}`,
    ]);
  }
}
