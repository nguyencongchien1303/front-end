import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { render } from "creditcardpayments/creditCardPayments";
@Component({
  selector: "app-dashboard-checkout",
  templateUrl: "./dashboard-checkout.component.html",
  styleUrls: ["./dashboard-checkout.component.scss"],
})
export class DashboardCheckoutComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    render({
      id: "#myPaypalButtons",
      currency: "USD",
      value: "123.00",
      onApprove: (detail) => {
        console.log("abc");

        alert("success");
      },
    });
  }
  dataId: any = [];

  ngOnInit(): void {
    // this.route.queryParamMap.subscribe((params) => {
    //   this.dataId = params.getAll("data");
    //   console.log(this.dataId);
    // });
    this.dataId = this.route.data.subscribe((res) => console.log(res));

    // console.log(this.route.snapshot.params);
  }
}
