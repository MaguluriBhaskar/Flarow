import { NgModule }  from '@angular/core';
import {RouterModule,Routes } from '@angular/router';

import { DashboardComponent }  from './dashboard.component';
import { OwnPropertiesComponent }  from './own-properties/own-properties.component';
import { PeoplePropertyVisitComponent }  from './people-property-visit/people-property-visit.component';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { ViewPropertyComponent }from './view-property/view-property.component';
import { BodyComponent } from './body/body.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';


const routes: Routes =[
  {path:'',component:BodyComponent,pathMatch:'full'},
  {path:'dashboard',component:BodyComponent},
  {path:'ownproperties',component:OwnPropertiesComponent},
  {path:'interestedpersons',component:PeoplePropertyVisitComponent},
  {path:'ownproperties/createproperty',component:CreatePropertyComponent},
  {path:'ownproperties/editproperty',component:EditPropertyComponent},
  {path:'ownproperties/viewproperty',component:ViewPropertyComponent}

];

@NgModule({

	imports:[RouterModule.forChild(routes)],
	exports:[RouterModule]
})

export class AppDashboardRouter{

}