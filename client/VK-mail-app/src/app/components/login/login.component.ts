import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../../services/login/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  visiblePassword: boolean;
  invalidLogin: boolean;
  constructor(private loginService: LoginService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.visiblePassword = false;
   this.invalidLogin = false;
  //  this.loginService.say();
   this.loginService.getData().subscribe((data) => console.log(data));
   //this.route.snapshot.data.message;
   console.log('data from resolver', this.route.snapshot.data.loginService);
  }
  showPassword() {
    console.log('password shown: ', this.visiblePassword);
    this.visiblePassword = !this.visiblePassword;
  }
  login(ev, form) {
    this.invalidLogin = false;
    ev.preventDefault();
    console.log(form.value);
    this.loginService.userLogin(form.value).subscribe((res) => {
      console.log('user logged in ', res);
      // check the response
      if (!res.user) {
        console.log('user invalid');
        this.invalidLogin = true;
      } else {
        console.log('welcome', res);
        if ( res === undefined ) {
        this.invalidLogin = true;
        };
      };
    });
  }

}
