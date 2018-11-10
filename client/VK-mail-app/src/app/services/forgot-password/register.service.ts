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

  securityCheck(data) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this._http.post('http://localhost:3000/forgot-password/security-check',
    data, {headers: headers, responseType: 'json'});
  }

  setNewPassword(password) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this._http.put('http://localhost:3000/forgot-password/change-password',
    password, {headers: headers, responseType: 'json'});
  }
}
