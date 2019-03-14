import { Component, OnInit } from '@angular/core';
import { InboxService } from 'app/services/inbox/inbox.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  inboxList : object[];
  checkUser : any;

  constructor(private inboxService: InboxService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('vkuser') !== null) {
      this.checkUser = JSON.parse(localStorage.getItem('vkuser'));
      console.log(this.checkUser)
      this.inboxService.getInbox(this.checkUser.accessKey, this.checkUser.user.id).subscribe((res) => {
        console.log('inbox', res);
        this.inboxList = res;
      });
    } else {
      this.router.navigate(['/login']);
    }
    console.log(this.inboxList, 'my inb is ');
  }

}
