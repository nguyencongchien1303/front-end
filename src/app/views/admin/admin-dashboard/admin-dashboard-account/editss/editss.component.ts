import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { EnterpriseService } from "src/app/_services/enterprise.service";


@Component({
  selector: 'app-editss',
  templateUrl: './editss.component.html',
  styleUrls: ['./editss.component.scss']
})
export class EditssComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private enterprise: EnterpriseService,
    private router: Router
  ) {}
  loginTypeForm = new FormGroup({
    email: new FormControl(),
    name: new FormControl(),
    website: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),

  });
  idAcc;
  data: any = [];
  ngOnInit(): void {
    this.idAcc = this.activatedRoute.snapshot.params.id;
    this.getDataId();
  }
  getDataId() {
    this.enterprise.apiGetEnterpriseId(this.idAcc).subscribe((res) => {
      this.data.push(res);
      this.loginTypeForm.setValue({
        email: this.data[0].email,
        name: this.data[0].name,
        website: this.data[0].website,
        phone: this.data[0].phone,
        address: this.data[0].address,
      });
    });
  }
  onUpdatess() {
    var data = this.loginTypeForm.value;
    console.log(data);
    this.enterprise
      .apiPutEnterprise(this.idAcc, data)
      .subscribe((res) => {
        this.router.navigate(["/admin/dashboard/account"]);
      });
  }
  onDeletess() {
    this.enterprise
      .apiDeleteEnterpriseId(this.idAcc)
      .subscribe((res) => {
        this.router.navigate(["/admin/dashboard/account"]);
      });
  }


}
