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
  constructor(private router: Router, private inboxService: InboxService) { }

  ngOnInit() {
    if (localStorage.getItem('vkuser') !== null) {
      this.checkUser = JSON.parse(localStorage.getItem('vkuser'));
      console.log(this.checkUser)
      this.inboxService.getInbox(this.checkUser.accessKey, this.checkUser.user.id).subscribe((res) => {
        console.log('inbox', res);
      });
    }
  }
  logOut() {
    localStorage.removeItem('vkuser');
    this.router.navigate(['/login']);
  }

}
