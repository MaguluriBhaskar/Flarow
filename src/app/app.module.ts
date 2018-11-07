import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderBodyComponent } from './header-body/header-body.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { BaseService }  from './services/base-service'

import { AppRouter }  from './app.router';



@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HeaderBodyComponent, ContactUsComponent],
  imports: [  BrowserModule, 
              FormsModule, 
              HttpModule,
              AppRouter
           ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
