import { Component, OnInit ,Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { EditPropertyComponent } from '../edit-property/edit-property.component';

import { CreatePropertyModel }  from '../../models/create-property-modle';
import { BaseService }  from '../../services/base-service';


@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css']
})
export class CreatePropertyComponent implements OnInit {


   @Input()  editProperty:any;
   @Input()  editFlag:boolean;
  
  createProperty:CreatePropertyModel;
  id:any;

  constructor(private baseSerive:BaseService) { 
    if(localStorage.getItem('id')){
       this.id=JSON.parse(localStorage.getItem('id'));
    }
  	this.createProperty = new CreatePropertyModel();
  	this.createProperty.type='';
  	this.createProperty.location='';
    console.log('edit',this.editFlag);
    if(this.editFlag){
      this.createProperty=this.editProperty;
      console.log('come if',this.createProperty);
    }
  }

  ngOnInit() {
  }


  createPropertyMethod(){

     this.createProperty['account_id']=this.id;
     this.baseSerive.post('/api/1/property/create',this.createProperty)
     .subscribe((resp)=>{
         console.log(resp);
     },
     (err)=>{
         console.log('err',err);
     });
  }
}
