import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DealPackageService } from 'src/app/_services/dealPackage.service';

@Component({
  selector: 'app-admin-dashboard-service',
  templateUrl: './admin-dashboard-service.component.html',
  styleUrls: ['./admin-dashboard-service.component.scss']
})
export class AdminDashboardServiceComponent implements OnInit {
  Servicelist
  constructor(private dealPackage:DealPackageService,private router: Router) { }

  dataSource: any = [];
  ngOnInit(): void {
    this.dealPackage. dealPackageGet()
    .subscribe(result=>{
      this.Servicelist=result;
      console.log(this.Servicelist)
    })
    this. Servicelist = JSON.parse(
      localStorage.getItem("dealpackage_data")
    ).id;
    console.log(this. Servicelist);
    this.getData();
  }
  getData() {
    this.dealPackage
      .dealPackageGetId(this. Servicelist)
      .subscribe((res) => {
        this.dataSource = res;
        console.log(this.dataSource);
      });
  }
  
  create() {
    this.router.navigate(["/admin/dashboard/service/create"]);
  }
  edit(id) {
    console.log(id);
    this.router.navigate([`/admin/dashboard/service/edit/${id}`]);
  }
}
