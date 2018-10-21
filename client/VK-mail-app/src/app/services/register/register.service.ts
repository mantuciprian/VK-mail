import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RegisterService {

  constructor(private _http: HttpClient) { }

  usernameAvailability(username) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this._http.post('http://localhost:3000/register/username-availability',
    username, {headers: headers, responseType: 'text'});
  }

  emailAvailability(email) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this._http.post('http://localhost:3000/register/email-availability',
    email, {headers: headers, responseType: 'text'});
  }

  userRegister(userData) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this._http.post('http://localhost:3000/register/register-user',
    userData, {headers: headers, responseType: 'text'});
  }

}
