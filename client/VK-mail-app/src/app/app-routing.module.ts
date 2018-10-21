import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import {ResolverService} from './common/resolver/resolver.service';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent, resolve: { loginService: ResolverService }},
  { path: 'register', component: RegisterComponent },
  { path: '',   redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ResolverService]
})
export class AppRoutingModule { }
