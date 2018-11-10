import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from 'app/services/forgot-password/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  securityQuestions: string[];
  errors : object[];
  usernameCheck: any;
  invalidSecurity: boolean;
  validData: boolean;
  userFound: boolean;
  user: string;
  invalidNewPw: boolean;
  constructor(private forgotPasswordService: ForgotPasswordService, private router : Router) { }

  ngOnInit() {
    this.securityQuestions = [
      'What was the make of your first car?',
      'What was your first pet?',
      'What was your birth place?'
    ];
    this.usernameCheck = true;
    this.errors = [
      {error : 'Username does not exist !'},
      {error : 'Security question or answare is incorrect'},
      {error : 'Password must be at last 5 characters long and to be the same'}
    ]
    this.invalidSecurity = false;
    this.validData = false;
    this.userFound = false;
    this.invalidNewPw = false;
  }

  checkUser(ev){
    const data = ev.target.value
    console.log('username check', data)
      this.forgotPasswordService.usernameCheck({username: data}).subscribe((res) => {
      this.usernameCheck = res;
    });
  }

  verifyUser(ev, f) {
    ev.preventDefault();
    const data = f.value;
    console.log(data)
    if(data.username !== '' && data.question !== '' && data.answare !== '' ) {
      this.validData = true;
      this.invalidSecurity = false;
      this.user = data.username
    } else {
      this.validData = false;
      this.invalidSecurity = true;
    }
    // send data if the data is valid
    if(this.validData) {
      this.forgotPasswordService.securityCheck(data).subscribe((res) => {
         // get res if the data is correct
         if(res === false) {
          this.validData = false;
          this.invalidSecurity = true;
         } else if (res === true) {
          // if the security data is correct
          this.invalidSecurity = false;
          this.userFound = true;
         } 
      });
    } 
  }

  changePassword(ev, f) {
      ev.preventDefault();
      console.log(f.value);
      const data = f.value;
      this.invalidNewPw = false;
      if(data.password !== data.password_repeat || data.password.length < 5) {
        this.invalidNewPw = true;
        return;
      } else {
        if(this.user === undefined) {
          alert('Error !');
        } else {
          // update the new password
          data.username = this.user;
          this.forgotPasswordService.setNewPassword(data).subscribe((res) => {
            if(res) {
              this.router.navigate(['/login']);
            } else {
              alert('an error has occured !')
            }
          });
        }
      }
  }

}
