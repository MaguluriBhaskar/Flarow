import { Component, OnInit } from '@angular/core';
import { BaseService }  from '../../services/base-service';
import { SharedService }  from '../../services/shared-service';
import { CreatePropertyComponent } from '../create-property/create-property.component';


@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css']
})
export class EditPropertyComponent implements OnInit {

  editObj:any;
  editFlag:boolean=true;
  constructor(private baseService:BaseService,private  sharedService:SharedService) { 
  	 this.sharedService.isLogin();
     if(localStorage.getItem('id')){
      	this.editObj=JSON.parse(localStorage.getItem('editProperty'));
     }
  }

  ngOnInit() {
  }

}
