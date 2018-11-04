import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

interface LoginRes {
  id: number;
  username: string;
  password: string;
  first_name: string;
  second_name: string;
  email: string;
  security_question: string;
  security_answare: string;
}
@Injectable()
export class LoginService {

  constructor(private _http: HttpClient) { }
  say() {
    console.log('loging');
  }
  getData(): Observable<any> {
    const url = 'http://localhost:3000/login';
    return this._http.get(url)
    .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse) {
  console.log(err.message);
  return Observable.throw(err.message);
  }
  userLogin(userData) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this._http.post<LoginRes>('http://localhost:3000/login/login-user',
    userData, {headers: headers, responseType: 'json'});
  }
}
