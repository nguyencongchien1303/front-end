import { DealPackageService } from "./../../../../_services/dealPackage.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-dashboard-service",
  templateUrl: "./dashboard-service.component.html",
  styleUrls: ["./dashboard-service.component.scss"],
})
export class DashboardServiceComponent implements OnInit {
  constructor(
    private router: Router,
    private deadPackageService: DealPackageService
  ) {}
  dataDealPackage: any = [];
  checkedList: any = [];

  ngOnInit(): void {
    this.getDealPackage();
  }
  getDealPackage() {
    this.deadPackageService.dealPackageGet().subscribe((res) => {
      this.dataDealPackage = res;
      console.log(this.dataDealPackage);
    });
  }
  onCheckboxChange(option, event) {
    if (event.target.checked) {
      this.checkedList.push(option.id);
    } else {
      for (var i = 0; i < this.dataDealPackage.length; i++) {
        if (this.checkedList[i] == option.id) {
          this.checkedList.splice(i, 1);
        }
      }
    }
    console.log(this.checkedList);
  }
  onSubmit() {
    console.log(this.checkedList);
    this.router.navigate(["/customer/dashboard/service/service-checkout"], {
      queryParams: this.checkedList,
    });
  }
}
