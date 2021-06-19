import { Enterprise } from "./../../../src/app/_model/enterprise.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class EnterpriseService {
  constructor(private http: HttpClient) {}
  apiGetAllEnterprise() {
    return this.http.get(`https://ec18b101.azurewebsites.net/api/Enterprise`);
  }
  apiPostEnterprise(body) {
    return this.http.post(
      `https://ec18b101.azurewebsites.net/api/Enterprise`,
      body
    );
  }
  apiPutEnterprise(id: string, body) {
    return this.http.put(
      `https://ec18b101.azurewebsites.net/api/Enterprise/${id}`,
      body
    );
  }
  apiGetEnterpriseId(id: string) {
    return this.http.get(
      `https://ec18b101.azurewebsites.net/api/Enterprise/${id}`
    );
  }
  apiDeleteEnterpriseId(id) {
    return this.http.delete(
      `https://ec18b101.azurewebsites.net/api/Enterprise/${id}`
    );
  }
}
