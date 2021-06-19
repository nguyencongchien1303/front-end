import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { DealPackageService } from "src/app/_services/dealPackage.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    private dealpackage: DealPackageService,
    private router: Router
  ) {}
  loginTypesForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    type: new FormControl(),

  });
  ngOnInit(): void {
    this.loginTypesForm.setValue({
      id: "",
      name: "",
      description: "",
      price: "",
      type: "",
    });
  }
  onLogins() {
    var data = this.loginTypesForm.value;
    data.price = Number(data.price);
    console.log(data);
    this.dealpackage.dealPackagePost(data).subscribe(() => {
      this.router.navigate(["/admin/dashboard/service"]);
    });
  }
}
