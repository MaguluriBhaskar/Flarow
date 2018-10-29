import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { BaseService }  from './services/base-service'


import { AppRouter }  from './app.router';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [  BrowserModule, 
              FormsModule, 
              HttpModule,
              AppRouter
           ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
