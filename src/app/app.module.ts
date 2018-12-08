import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {enableProdMode} from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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

import { AppRouter }  from './app.router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

enableProdMode();

@NgModule({
  declarations: [
            AppComponent, 
  				  LoginComponent, 
  				  RegisterComponent, 
  				  HeaderBodyComponent, 
  				  ContactUsComponent,
            NavigationBarComponent
  				],
  imports: [  
  			 	       BrowserModule, 
                 BrowserAnimationsModule,
                 ToastrModule.forRoot({
                            timeOut: 5000,
                            positionClass: 'toast-top-center',
                            preventDuplicates: true
                          }),
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
