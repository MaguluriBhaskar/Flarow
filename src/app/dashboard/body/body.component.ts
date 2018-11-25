import { Component, OnInit } from '@angular/core';
import { SharedService }  from '../../services/shared-service';
import { BaseService }  from '../../services/base-service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  id:any;
  allPropertyList:any;

  constructor(private baseSerive:BaseService,private sharedService:SharedService) {
  	this.sharedService.isLogin();
  	if(localStorage.getItem('id')){
      	this.id=JSON.parse(localStorage.getItem('id'));
    }
    this.getAllProperties();
  }

  ngOnInit() {
  }

  getAllProperties(){
  	this.baseSerive.get('/api/1/property/list')
     .subscribe((resp)=>{
      this.allPropertyList=resp.result;
     },
     (err)=>{
         console.log('err',err);
     });
  }

}
