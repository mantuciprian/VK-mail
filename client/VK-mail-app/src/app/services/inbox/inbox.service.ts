import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';

@Injectable()
export class InboxService {

  constructor(private _http: HttpClient, private router: Router) { }
  getInbox(token, userData): Observable<any> {
    console.log('token is ', token)
    const headers = new HttpHeaders({Authorization: `bearer ${token}`, 'Content-Type': 'application/x-www-form-urlencoded'});
    return this._http.post('http://localhost:3000/inbox/inbox',
     userData,
     {headers: headers, responseType: 'json'}).catch((e) => this.handleError(e));
  }

  handleError(err: HttpErrorResponse) {
    console.log(err.message, 'status is ' + err.status);
    if(err.status === 403) {
      alert('Login session ended! Please log in again');
      this.router.navigate(['/login'])
    };
    return Observable.throw(err.message);
    }
}
