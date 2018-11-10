import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface UsernameCheckRes {
  success: boolean;
}

@Injectable()
export class ForgotPasswordService {

  constructor(private _http: HttpClient) { }

  usernameCheck(username) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this._http.post('http://localhost:3000/forgot-password/username-check',
    username, {headers: headers, responseType: 'json'});
  }
  test() {
    console.log('Forgot pw works');
   }

}
