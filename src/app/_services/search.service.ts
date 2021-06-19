import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  constructor(private http: HttpClient) {}

  search() {
    return this.http.get(`https://ec18b101.azurewebsites.net/api/Order`);
  }
}
