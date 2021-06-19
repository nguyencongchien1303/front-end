import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-admin-dashboard-order',
  templateUrl: './admin-dashboard-order.component.html',
  styleUrls: ['./admin-dashboard-order.component.scss']
})
export class AdminDashboardOrderComponent implements OnInit {

  Orderlist
  constructor(private userservice:OrderService) { }

  ngOnInit(): void {
    this.userservice.orderGetAllOrder()
    .subscribe(result=>{
      this.Orderlist=result;
      console.log(this.Orderlist)
    })
  

  }

}
