import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
@Injectable()
export class LoginService {

  constructor(private _http: HttpClient) { }
  say(){
    console.log('loging');
  }
  getData(): Observable<any> {
    const url = 'http://localhost:3000/login';
    return this._http.get(url)
    // .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse) {
  console.log(err.message);
  return Observable.throw(err.message);
 }
}
