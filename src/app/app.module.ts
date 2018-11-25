import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


/* Custom Modules Start */
 import { AppDashboardModule }  from './dashboard/app.dashboard.module'
/* ustom Modules End */

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderBodyComponent } from './header-body/header-body.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { BaseService }  from './services/base-service'
import { SharedService }  from './services/shared-service'
import { CommonModule } from '@angular/common';

import { AppRouter }  from './app.router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';




@NgModule({
  declarations: [
                  AppComponent, 
  				  LoginComponent, 
  				  RegisterComponent, 
  				  HeaderBodyComponent, 
  				  ContactUsComponent, NavigationBarComponent
  				],
  imports: [  
  			 	       BrowserModule, 
                  FormsModule, 
                  CommonModule,
                  HttpModule,
                  AppRouter,
                  AppDashboardModule
           ],
  providers: [BaseService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {}
