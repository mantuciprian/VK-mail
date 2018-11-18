import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import {ResolverService} from './common/resolver/resolver.service';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { ComposeComponent } from './components/compose/compose.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, resolve: { loginService: ResolverService }},
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'home', component: HomeComponent, children: [
    { path: 'inbox', children: [
      {path: '', component: InboxComponent}
    ]},
    { path: 'compose', children: [
      {path: '', component: ComposeComponent}
    ]}
  ]},
  { path: '',   redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ResolverService]
})
export class AppRoutingModule { }
