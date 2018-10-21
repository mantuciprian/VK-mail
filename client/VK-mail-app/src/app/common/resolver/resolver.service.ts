import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {LoginService} from '../../services/login/login.service';

@Injectable()
export class ResolverService  implements Resolve<any> {

  constructor(private loginService: LoginService) { }
  resolve() {
    return  this.loginService.getData();
  }
}
