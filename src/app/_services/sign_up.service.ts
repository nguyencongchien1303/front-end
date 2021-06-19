import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class SignUpService {
  constructor(private http: HttpClient) {}

  signUp(name: String, username: string, phone: number, password: string) {
    const body = {
      name,
      username,
      phone,
      password,
    };
    return this.http.post(`https://ec18b101.azurewebsites.net/api/User`, body);
  }
}
