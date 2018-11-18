import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class InboxService {

  constructor(private _http: HttpClient) { }
  getInbox(token, userData): Observable<any> {
    console.log('token is ', token)
    const headers = new HttpHeaders({Authorization: `bearer ${token}`, 'Content-Type': 'application/x-www-form-urlencoded'});
    return this._http.post('http://localhost:3000/inbox/inbox',
     userData,
     {headers: headers, responseType: 'json'});
  }
}
