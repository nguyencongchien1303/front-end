import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: 'app-creates',
  templateUrl: './creates.component.html',
  styleUrls: ['./creates.component.scss']
})
export class CreatesComponent implements OnInit {

  constructor(
    private user: UserService,
    private router: Router
  ) {}
  loginTypeForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    address: new FormControl(),
    phone: new FormControl(),
  });
  ngOnInit(): void {
    this.loginTypeForm.setValue({
      id: "",
      name: "",
      address: "",
      phone: "",
    });
  }
  onLoginss() {
    var data = this.loginTypeForm.value;
    console.log(data);
    this.user.apiPostUser(data).subscribe(() => {
      this.router.navigate(["/admin/dashboard/customer"]);
    });
  }

}
