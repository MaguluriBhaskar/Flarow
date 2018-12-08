import { Component, OnInit } from '@angular/core';
import { NgForm,Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LoginModel }  from "../models/login-model";
import { BaseService }  from '../services/base-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:LoginModel;

  constructor(private ts:ToastrService,private baseSerive:BaseService,private router:Router) { 
  	this.login= new LoginModel();
    if(localStorage.getItem('id')){
        this.router.navigate(['/user/dashboard']);
    }
  }

  ngOnInit() {
  }

  loginMethod(){
     this.baseSerive.post('/api/1/user/login',this.login)
     .subscribe((resp)=>{
       if(resp.status){
          localStorage.setItem('id',JSON.stringify(resp.data.id));
          localStorage.setItem('name',JSON.stringify(resp.data.fullname));
          this.router.navigate(['/user/dashboard']);
          this.ts.success(resp.msg);
       }
       else{
          this.ts.error(resp.msg);
       }
     },
     (err)=>{
         console.log('err',err);
         
     });
  }

 



}
