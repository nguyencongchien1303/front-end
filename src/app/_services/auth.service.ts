import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const body = {
      username,
      password,
    };
    return this.http.post(
      `https://ec18b101.azurewebsites.net/api/User/login`,
      body
    );
  }
  loginEnterprise(email: string, password: string) {
    const body = {
      email,
      password,
    };
    return this.http.post(
      `https://ec18b101.azurewebsites.net/api/User/enterprise-login`,
      body
    );
  }
}
