import { DealPackageService } from "./../../../../_services/dealPackage.service";
import { DealPackageBuyService } from "./../../../../_services/dealPackageBuy.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-enterprise-dashboard-order",
  templateUrl: "./enterprise-dashboard-order.component.html",
  styleUrls: ["./enterprise-dashboard-order.component.scss"],
})
export class EnterpriseDashboardOrderComponent implements OnInit {
  constructor(
    private dealPackageBuyService: DealPackageBuyService,
    private dealPackageService: DealPackageService
  ) {}
  dataSource: any = [];
  dataDealPackage: any = [];
  ngOnInit() {
    this.getData();
  }
  async getData() {
    this.dataSource = await this.dealPackageService
      .dealPackageGet()
      .toPromise();
    // let data = await this.dealPackageBuyService
    //   .dealPackageBuyGet()
    //   .subscribe((res) => {
    //     this.dataSource = res;
    //     for (var i = 0; i < this.dataSource.length; i++) {
    //       // console.log(i);
    //       this.getDataDealPackageId(this.dataSource[i].dealPackage, i);
    //       // await this.dealPackageService
    //       //   .dealPackageGetId(this.dataSource[i].dealPackage)
    //       //   .subscribe((res) => {
    //       //     this.dataDealPackage = res;
    //       //     console.log(this.dataDealPackage);

    //       //     // console.log(this.dataDealPackage.name);
    //       //     // console.log(i);

    //       //     // console.log(this.dataSource[0]);

    //       //     // this.dataSource[i].dealPackage = this.dataDealPackage.name;
    //       // //   });
    //       // console.log(i);
    //       // console.log(this.dataDealPackage);
    //     }
    //     // console.log(this.dataSource);
    //   });
    // console.log(data);
    // console.log(data1);

    console.log(this.dataSource);
    for (var i = 0; i < this.dataSource.length; i++) {
      let data = this.dealPackageService
        .dealPackageGetId(this.dataSource[i].id)
        .toPromise();
      console.log(data);

      this.dataDealPackage.push(data);
    }
    console.log(this.dataDealPackage[0].__zone_symbol__value);
    console.log(this.dataSource);
  }
  getDataDealPackageId(id, i) {
    this.dealPackageService.dealPackageGetId(id).subscribe((res) => {
      this.dataDealPackage.push(res);
      // console.log(this.dataDealPackage);

      // this.dataSource[i].push(this.dataDealPackage.name);
      // console.log(this.dataDealPackage.name);
      // return this.dataDealPackage.name;
    });
  }
}
