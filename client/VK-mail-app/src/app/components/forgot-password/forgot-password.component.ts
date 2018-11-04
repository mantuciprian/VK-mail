import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  securityQuestions: string[];
  constructor() { }

  ngOnInit() {
    this.securityQuestions = [
      'What was the make of your first car ?',
      'What was your first pet?',
      'What was your birth place?'
    ];
  }

}
