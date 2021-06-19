import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ShippingCostService {
  constructor(private http: HttpClient) {}
  shippingCostGetByDeliveryId(id) {
    return this.http.get(
      `https://ec18b101.azurewebsites.net/api/ShippingCost/GetByDeliveryId/${id}`
    );
  }
  shippingCostPost(body) {
    return this.http.post(
      `https://ec18b101.azurewebsites.net/api/ShippingCost`,
      body
    );
  }
  shippingCostGetId(id) {
    return this.http.get(
      `https://ec18b101.azurewebsites.net/api/ShippingCost/${id}`
    );
  }
  shippingCostPutId(id, body) {
    return this.http.put(
      `https://ec18b101.azurewebsites.net/api/ShippingCost/${id}`,
      body
    );
  }
  shippingCostDeleteId(id) {
    return this.http.delete(
      `https://ec18b101.azurewebsites.net/api/ShippingCost/${id}`
    );
  }
}
