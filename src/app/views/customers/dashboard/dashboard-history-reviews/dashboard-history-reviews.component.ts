import { User } from "../../../../_model/user.model";
import { OrderService } from "../../../../_services/order.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-dashboard-history-reviews",
  templateUrl: "./dashboard-history-reviews.component.html",
  styleUrls: ["./dashboard-history-reviews.component.scss"],
})
export class DashboardHistoryReviewsComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  idUser: String;
  dataUser: any = [];
  ngOnInit(): void {
    this.idUser = JSON.parse(localStorage.getItem("user_data")).id;
    console.log(this.idUser);
    console.log(this.activatedRoute.snapshot.params);
  }
  getData() {
    this.orderService.orderHistoryGetId(this.idUser).subscribe((res: User) => {
      this.dataUser = res;
      console.log(this.dataUser);
    });
  }
  onReviews() {
    this.router.navigate(["/customer/dashboard/service/service-checkout"]);
  }
}
