import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ShippingCostService } from "src/app/_services/shippingCost.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private shippingCostService: ShippingCostService,
    private router: Router
  ) {}
  loginTypeForm = new FormGroup({
    id: new FormControl(),
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
  idData;
  data: any = [];
  ngOnInit(): void {
    this.idData = this.activatedRoute.snapshot.params.id;
    this.getDataId();
  }
  getDataId() {
    this.shippingCostService.shippingCostGetId(this.idData).subscribe((res) => {
      this.data.push(res);

      this.loginTypeForm.setValue({
        id: this.data[0].id,
        delivery: this.data[0].delivery,
        type: this.data[0].type,
        priceOnType: this.data[0].priceOnType,
        weight: this.data[0].weight,
        priceOnWeight: this.data[0].priceOnWeight,
        size: this.data[0].size,
        priceOnSize: this.data[0].priceOnSize,
        distance: this.data[0].distance,
        priceOnDistance: this.data[0].priceOnDistance,
        deliveryTime: this.data[0].deliveryTime,
        priceOnDeliveryTime: this.data[0].priceOnDeliveryTime,
      });
    });
  }
  onUpdate() {
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
    this.shippingCostService
      .shippingCostPutId(this.idData, data)
      .subscribe((res) => {
        this.router.navigate(["/enterprise/dashboard/price"]);
      });
  }
  onDelete() {
    this.shippingCostService
      .shippingCostDeleteId(this.idData)
      .subscribe((res) => {
        this.router.navigate(["/enterprise/dashboard/price"]);
      });
  }
}
