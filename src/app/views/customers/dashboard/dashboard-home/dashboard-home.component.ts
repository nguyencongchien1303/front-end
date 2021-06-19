import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/_model/user.model';
import { SearchService } from 'src/app/_services/search.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss'],
})
export class DashboardHomeComponent implements OnInit {
  constructor(private searchService: SearchService) {}
  searchTypeForm = new FormGroup({
    phone: new FormControl(),
  });
  userData: User;
  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('user_data'));
  }
  search() {
    console.log(this.searchTypeForm.value);
    this.searchService.search().subscribe((res) => {
      console.log(res);
    });
  }
}
