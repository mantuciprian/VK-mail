import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login/login.service';
import { RegisterComponent } from './components/register/register.component';
import { RegisterService } from './services/register/register.service';
import { RegisterModalComponent } from './components/modal/register-modal/register-modal.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ForgotPasswordService } from './services/forgot-password/register.service';
import { HomeComponent } from './components/home/home.component';
import { InboxService } from './services/inbox/inbox.service';
import { InboxComponent } from './components/inbox/inbox.component';
import { ComposeComponent } from './components/compose/compose.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterModalComponent,
    ForgotPasswordComponent,
    HomeComponent,
    InboxComponent,
    ComposeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoginService, RegisterService, ForgotPasswordService, InboxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
