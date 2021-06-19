import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  constructor(private http: HttpClient) {}

  orderGetByUserIdGetId(id) {
    return this.http.get(
      `https://ec18b101.azurewebsites.net/api/Order/GetByUserId/${id}`
    );
  }
  orderHistoryGetId(id) {
    return this.http.get(
      `https://ec18b101.azurewebsites.net/api/Order/History/${id}`
    );
  }
  orderGetAllOrder() {
    return this.http.get(`https://ec18b101.azurewebsites.net/api/Order`);
  }
}
