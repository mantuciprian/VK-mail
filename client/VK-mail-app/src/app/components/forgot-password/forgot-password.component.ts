import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from 'app/services/forgot-password/register.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  securityQuestions: string[];
  errors : object[];
  usernameCheck: any
  constructor(private forgotPasswordService: ForgotPasswordService) { }

  ngOnInit() {
    this.securityQuestions = [
      'What was the make of your first car ?',
      'What was your first pet?',
      'What was your birth place?'
    ];
    this.usernameCheck = true;
    this.forgotPasswordService.usernameCheck({username: 'ciprian'}).subscribe((res) => {
      this.usernameCheck = res;
    });
    this.errors = [
      {error : 'Username does not exist !'},
      {error : 'Security question or answare is incorrect'}
    ]
  }

}
