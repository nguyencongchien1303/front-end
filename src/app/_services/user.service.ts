import { User } from "./../../../src/app/_model/user.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  apiPutUserId(id: string, body) {
    return this.http.put(
      `https://ec18b101.azurewebsites.net/api/User/${id}`,
      body
    );
  }
  apiGetUserId(id: string) {
    return this.http.get(`https://ec18b101.azurewebsites.net/api/User/${id}`);
  }
  apiGetAllUser() {
    return this.http.get(`https://ec18b101.azurewebsites.net/api/User`);
  }
  apiPostUser(body) {
    return this.http.post(`https://ec18b101.azurewebsites.net/api/User`, body);
  }
  apiDeleteUserId(id) {
    return this.http.delete(
      `https://ec18b101.azurewebsites.net/api/User/${id}`
    );
  }
}
