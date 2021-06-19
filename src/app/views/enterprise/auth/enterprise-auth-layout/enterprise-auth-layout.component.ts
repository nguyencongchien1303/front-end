import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-enterprise-auth-layout',
  templateUrl: './enterprise-auth-layout.component.html',
  styleUrls: ['./enterprise-auth-layout.component.scss']
})
export class EnterpriseAuthLayoutComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  onBack() {
    this.location.back();
  }
}
