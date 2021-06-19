import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ShippingCostService } from "src/app/_services/shippingCost.service";

@Component({
  selector: "app-enterprise-dashboard-price",
  templateUrl: "./enterprise-dashboard-price.component.html",
  styleUrls: ["./enterprise-dashboard-price.component.scss"],
})
export class EnterpriseDashboardPriceComponent implements OnInit {
  constructor(
    private shippingCostService: ShippingCostService,
    private router: Router
  ) {}
  idEnterprise: String;
  dataSource: any = [];
  ngOnInit(): void {
    const token = localStorage.getItem("token_enterprise");
    this.idEnterprise = JSON.parse(
      localStorage.getItem("user_enterprise_data")
    ).id;
    console.log(this.idEnterprise);
    this.getData();
  }
  getData() {
    this.shippingCostService
      .shippingCostGetByDeliveryId(this.idEnterprise)
      .subscribe((res) => {
        this.dataSource = res;
        console.log(this.dataSource);
      });
  }
  create() {
    this.router.navigate(["/enterprise/dashboard/price/create"]);
  }
  edit(id) {
    console.log(id);

    this.router.navigate([`/enterprise/dashboard/price/edit/${id}`]);
  }
}
