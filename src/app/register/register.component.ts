import { Component, OnInit } from '@angular/core';
import { NgForm,Validators }  from '@angular/forms';

import { RegisterModel } from '../models/register.model';
import { BaseService }  from '../services/base-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register:RegisterModel;

  constructor(private baseSerive:BaseService) {
      this.register = new RegisterModel();
      this.register.gender='';
      this.register.type='';
      this.register.country='';
      this.register.city='';
  }

  ngOnInit() {
  }

  Flarowregister(){
      console.log('register data',this.register);
     this.baseSerive.post('/api/1/user/register',this.register)
     .subscribe((resp)=>{
         console.log(resp);
     },
     (err)=>{
         console.log('err',err);
     });
  }

}
