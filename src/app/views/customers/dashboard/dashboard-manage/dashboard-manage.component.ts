import { OrderService } from "./../../../../_services/order.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard-manage",
  templateUrl: "./dashboard-manage.component.html",
  styleUrls: ["./dashboard-manage.component.scss"],
})
export class DashboardManageComponent implements OnInit {
  constructor(private orderService: OrderService) {}
  idUser: String;
  isActive: number = 1;
  allData: any = [];
  allDataPaymentSuccess: any = [];
  allDataWaitGetGoods: any = [];
  allDataExploit: any = [];
  allDataShipping: any = [];
  allDataSuccess: any = [];

  ngOnInit(): void {
    this.idUser = JSON.parse(localStorage.getItem("user_data")).id;
    console.log(this.idUser);
    this.getData();
  }
  getData() {
    this.orderService.orderGetByUserIdGetId(this.idUser).subscribe((res) => {
      this.allData = res;
      console.log(this.allData);
      for (let i = 0; i < this.allData.length; i++) {
        switch (this.allData[i].status) {
          case "thanh toán thành công":
            this.allDataPaymentSuccess.push(this.allData[i]);
            break;
          case "chờ lấy hàng":
            this.allDataWaitGetGoods.push(this.allData[i]);
            break;
          case "đang khai thác":
            this.allDataExploit.push(this.allData[i]);
            break;
          case "đang giao hàng":
            this.allDataShipping.push(this.allData[i]);
            break;
          case "giao hàng thành công":
            this.allDataSuccess.push(this.allData[i]);
            break;
          default:
            break;
        }
      }
    });
  }
  getAllData() {
    this.isActive = 1;
  }
  getDataWaitConfirm() {
    this.isActive = 2;
  }
  getDataWaitGetGoods() {
    this.isActive = 3;
    console.log(this.allDataWaitGetGoods);
  }
  getDataShipping() {
    this.isActive = 4;
  }
  getDataHistory() {
    this.isActive = 5;
  }
  getDataCancel() {
    this.isActive = 6;
  }
}
