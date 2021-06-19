import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  is_mail_sent: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  sendtoEmail() {
    this.is_mail_sent = true;
  }

  gotoReset() {
    this.router.navigate(['/customer/auth/reset-password']);
  }
}
