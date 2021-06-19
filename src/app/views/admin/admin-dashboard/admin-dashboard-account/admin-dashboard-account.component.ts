import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnterpriseService } from 'src/app/_services/enterprise.service';


@Component({
  selector: 'app-admin-dashboard-account',
  templateUrl: './admin-dashboard-account.component.html',
  styleUrls: ['./admin-dashboard-account.component.scss']
})
export class AdminDashboardAccountComponent implements OnInit {

  Enterpriselist

  dataSource: any = [];
  constructor(private enterpriseservice:EnterpriseService,private router: Router) { }

  ngOnInit(): void {
    this.enterpriseservice.apiGetAllEnterprise()
    .subscribe(result=>{
      this.Enterpriselist=result;
      console.log(this.Enterpriselist)
    })
  
    this.Enterpriselist= JSON.parse(
      localStorage.getItem("enterprise_data")
    ).id;
    console.log(this.Enterpriselist);
    this.getData();
  }
  getData() {
    this.enterpriseservice
      .apiGetEnterpriseId(this.Enterpriselist)
      .subscribe((res) => {
        this.dataSource = res;
        console.log(this.dataSource);
      });
  }
  
  add() {
    this.router.navigate(["/admin/dashboard/account/add"]);
  }
  editss(id) {
    console.log(id);
    this.router.navigate([`/admin/dashboard/account/editss/${id}`]);
  }
}
