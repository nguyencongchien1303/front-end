import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class DealPackageBuyService {
  constructor(private http: HttpClient) {}
  dealPackageBuyGet() {
    return this.http.get(
      `https://ec18b101.azurewebsites.net/api/dealpackagebuy`
    );
  }
  dealPackageBuyPost(body) {
    return this.http.post(
      `https://ec18b101.azurewebsites.net/api/dealpackagebuy`,
      body
    );
  }
}
