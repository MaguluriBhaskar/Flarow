import { NgModule}  from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { DashboardComponent }  from './dashboard.component';

import { AppDashboardRouter }  from './app.dashboard.router';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { OwnPropertiesComponent } from './own-properties/own-properties.component';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { ViewPropertyComponent } from './view-property/view-property.component';
import { PeoplePropertyVisitComponent } from './people-property-visit/people-property-visit.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';


@NgModule({
	declarations:[ 
	               DashboardComponent, HeaderComponent, BodyComponent, OwnPropertiesComponent, CreatePropertyComponent, ViewPropertyComponent, PeoplePropertyVisitComponent, EditPropertyComponent
	             ],
	imports:[
	          FormsModule,
	          CommonModule,
	          AppDashboardRouter
	        ],
	exports:[],
	providers:[]
})

export class AppDashboardModule {
	
}