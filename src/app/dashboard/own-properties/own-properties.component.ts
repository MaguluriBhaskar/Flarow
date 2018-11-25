import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService }  from '../../services/base-service';
import { SharedService }  from '../../services/shared-service';

@Component({
  selector: 'app-own-properties',
  templateUrl: './own-properties.component.html',
  styleUrls: ['./own-properties.component.css']
})
export class OwnPropertiesComponent implements OnInit {

  id:any;
  name:any;
  ownPropertyList:any;

  constructor(private router:Router,private baseService:BaseService,private  sharedService:SharedService) {
      this.sharedService.isLogin();
      if(localStorage.getItem('id')){
      	this.id=JSON.parse(localStorage.getItem('id'));
      	this.name=JSON.parse(localStorage.getItem('name'));
      }
      this.getOwnPropertyList();
  }

  ngOnInit() {
  }

  getOwnPropertyList(){
  	 this.baseService.get('/api/1/property/list/'+this.id)
     .subscribe((resp)=>{
      this.ownPropertyList=resp.result;
     },
     (err)=>{
         console.log('err',err);
     });
  }

  naviGateToEdit(obj:any){
      localStorage.setItem('editProperty',JSON.stringify(obj));
      this.router.navigate(["/ownproperties/editproperty"]);
  }

}
