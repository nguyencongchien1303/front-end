import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class DealPackageService {
  constructor(private http: HttpClient) {}
  dealPackageGet() {
    return this.http.get(`https://ec18b101.azurewebsites.net/api/dealpackage`);
  }
  dealPackageGetId(id) {
    return this.http.get(
      `https://ec18b101.azurewebsites.net/api/dealpackage/${id}`
    );
  }

  dealPackagePost(body) {
    return this.http.post(
      `https://ec18b101.azurewebsites.net/api/dealpackage`,
      body
    );
  }
  dealPackagePutId(id, body) {
    return this.http.put(
      `https://ec18b101.azurewebsites.net/api/dealpackage/${id}`,
      body
    );
  }
  dealPackageDeleteId(id) {
    return this.http.delete(
      `https://ec18b101.azurewebsites.net/api/dealpackage/${id}`
    );
  }
}
