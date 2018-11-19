import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InboxService } from 'app/services/inbox/inbox.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  checkUser: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  logOut() {
    localStorage.removeItem('vkuser');
    this.router.navigate(['/login']);
  }

}
