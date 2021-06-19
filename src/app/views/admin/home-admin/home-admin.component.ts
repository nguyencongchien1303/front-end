import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }


  onLogin() {
    this.router.navigate(['/admin/dashboard']);
  }

}
