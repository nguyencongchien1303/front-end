import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ShippingCostService } from "src/app/_services/shippingCost.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
})
export class CreateComponent implements OnInit {
  constructor(
    private shippingCostService: ShippingCostService,
    private router: Router
  ) {}
  loginTypeForm = new FormGroup({
    delivery: new FormControl(),
    type: new FormControl(),
    priceOnType: new FormControl(),
    weight: new FormControl(),
    priceOnWeight: new FormControl(),
    size: new FormControl(),
    priceOnSize: new FormControl(),
    distance: new FormControl(),
    priceOnDistance: new FormControl(),
    deliveryTime: new FormControl(),
    priceOnDeliveryTime: new FormControl(),
  });
  ngOnInit(): void {
    var id = JSON.parse(localStorage.getItem("user_enterprise_data")).id;
    this.loginTypeForm.setValue({
      delivery: id,
      type: "",
      priceOnType: "",
      weight: "",
      priceOnWeight: "",
      size: "",
      priceOnSize: "",
      distance: "",
      priceOnDistance: "",
      deliveryTime: "",
      priceOnDeliveryTime: "",
    });
  }
  onLogin() {
    var data = this.loginTypeForm.value;
    data.priceOnType = Number(data.priceOnType);
    data.weight = Number(data.weight);
    data.priceOnWeight = Number(data.priceOnWeight);
    data.size = Number(data.size);
    data.priceOnSize = Number(data.priceOnSize);
    data.distance = Number(data.distance);
    data.priceOnDistance = Number(data.priceOnDistance);
    data.deliveryTime = Number(data.deliveryTime);
    data.priceOnDeliveryTime = Number(data.priceOnDeliveryTime);
    console.log(data);
    this.shippingCostService.shippingCostPost(data).subscribe((res) => {
      this.router.navigate(["/enterprise/dashboard/price"]);
    });
  }
}
