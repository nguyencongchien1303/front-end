import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-edits',
  templateUrl: './edits.component.html',
  styleUrls: ['./edits.component.scss']
})
export class EditsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private user: UserService,
    private router: Router
  ) {}
  loginTypeForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),

  });
  idAcc;
  data: any = [];
  ngOnInit(): void {
    this.idAcc = this.activatedRoute.snapshot.params.id;
    this.getDataId();
  }
  getDataId() {
    this.user.apiGetUserId(this.idAcc).subscribe((res) => {
      this.data.push(res);
      this.loginTypeForm.setValue({
        id: this.data[0].id,
        name: this.data[0].name,
        phone: this.data[0].phone,
        address: this.data[0].address,
      });
    });
  }
  onUpdate() {
    var data = this.loginTypeForm.value;
    console.log(data);
    this.user
      .apiPutUserId(this.idAcc, data)
      .subscribe((res) => {
        this.router.navigate(["/admin/dashboard/customer"]);
      });
  }
  onDelete() {
    this.user
      .apiDeleteUserId(this.idAcc)
      .subscribe((res) => {
        this.router.navigate(["/admin/dashboard/customer"]);
      });
  }


}
