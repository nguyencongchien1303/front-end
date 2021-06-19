import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { DealPackageService } from "src/app/_services/dealPackage.service";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private dealpackage: DealPackageService,
    private router: Router
  ) {}
  loginTypeForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    type: new FormControl(),
    price: new FormControl(),
    description:new FormControl(),

  });
  idAcc;
  data: any = [];
  ngOnInit(): void {
    this.idAcc = this.activatedRoute.snapshot.params.id;
    this.getDataId();
  }
  getDataId() {
    this.dealpackage.dealPackageGetId(this.idAcc).subscribe((res) => {
      this.data.push(res);
      this.loginTypeForm.setValue({
        id: this.data[0].id,
        name: this.data[0].name,
        type: this.data[0].type,
        price: this.data[0].price,
        description: this.data[0].description,
      });
    });
  }

  onUpdate() {
    var data = this.loginTypeForm.value;
    data.price = Number(data. price);
    console.log(data);
    this.dealpackage
      .dealPackagePutId(this.idAcc, data)
      .subscribe((res) => {
        this.router.navigate(["/admin/dashboard/service"]);
      });
  }
  onDelete() {
    this.dealpackage
      .dealPackageDeleteId(this.idAcc)
      .subscribe((res) => {
        this.router.navigate(["/admin/dashboard/service"]);
      });
  }

}
