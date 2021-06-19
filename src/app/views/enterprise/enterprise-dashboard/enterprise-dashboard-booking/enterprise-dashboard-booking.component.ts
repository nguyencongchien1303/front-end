import { DealPackageBuyService } from "./../../../../_services/dealPackageBuy.service";
import { DealPackageService } from "./../../../../_services/dealPackage.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-enterprise-dashboard-booking",
  templateUrl: "./enterprise-dashboard-booking.component.html",
  styleUrls: ["./enterprise-dashboard-booking.component.scss"],
})
export class EnterpriseDashboardBookingComponent implements OnInit {
  constructor(
    private dealPackageService: DealPackageService,
    private dealPackageBuyService: DealPackageBuyService
  ) {}
  data: any = [];
  ngOnInit(): void {
    this.getData();
  }
  body: any;
  getData() {
    this.dealPackageService.dealPackageGet().subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }
  // getDataId(id) {
  //   this.dealPackageService.dealPackageGetId(id).subscribe(res=>{
  //     var body = res;
  //     this.buyPackage(body);
  //   })
  // }
  buyPackage(id) {
    var body = {
      dealPackage: id,
      enterprise: JSON.parse(localStorage.getItem("user_enterprise_data")).id,
      amount: 1,
    };
    this.dealPackageBuyService.dealPackageBuyPost(body).subscribe((res) => {
      console.log(res);
    });
  }
}
