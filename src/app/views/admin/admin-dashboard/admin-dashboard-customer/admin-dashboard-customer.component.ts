import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard-customer',
  templateUrl: './admin-dashboard-customer.component.html',
  styleUrls: ['./admin-dashboard-customer.component.scss']
})
export class AdminDashboardCustomerComponent implements OnInit {

  Userlist
 
  dataSource: any = [];
  constructor(private userservice:UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userservice.apiGetAllUser()
    .subscribe(result=>{
      this.Userlist=result;
      console.log(this.Userlist)
    })
  

    this.Userlist = JSON.parse(
      localStorage.getItem("user_data")
    ).id;
    console.log(this.Userlist);
    this.getData();
  }
  getData() {
    this.userservice
      .apiGetUserId(this.Userlist)
      .subscribe((res) => {
        this.dataSource = res;
        console.log(this.dataSource);
      });
  }
  
  creates() {
    this.router.navigate(["/admin/dashboard/customer/creates"]);
  }
  edits(id) {
    console.log(id);
    this.router.navigate([`/admin/dashboard/customer/edits/${id}`]);
  }

}
