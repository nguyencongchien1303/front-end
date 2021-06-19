import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CountriesService } from "src/app/_services/countries.service";

@Component({
  selector: "app-dashboard-booking",
  templateUrl: "./dashboard-booking.component.html",
  styleUrls: ["./dashboard-booking.component.scss"],
})
export class DashboardBookingComponent implements OnInit {
  constructor(private http: HttpClient, private country: CountriesService) {}
  dataTypeForm = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    category: new FormControl(),
    totalWeight: new FormControl(),
    size: new FormControl(),
    length: new FormControl(),
    width: new FormControl(),
    height: new FormControl(),
    address: new FormControl(),
    addressCity: new FormControl(),
    addressDistrict: new FormControl(),
    addressDistrictWard: new FormControl(),
  });
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  ngOnInit(): void {}
  onNext() {
    console.log(this.dataTypeForm.value);
  }
}
