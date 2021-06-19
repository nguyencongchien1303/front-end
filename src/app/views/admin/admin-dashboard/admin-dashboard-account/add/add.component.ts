import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { EnterpriseService } from "src/app/_services/enterprise.service";


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  constructor(
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
  ngOnInit(): void {
  
    this.loginTypeForm.setValue({
      email: "",
      name: "",
      website: "",
      phone: "",
      address: "",
      id: "",
      password: "",

    });
  }
  onLoginn() {
    var data = this.loginTypeForm.value;
    console.log(data);
    this.enterprise.apiPostEnterprise(data).subscribe((res) => {
      this.router.navigate(["/admin/dashboard/account"]);
    });
  }


}
