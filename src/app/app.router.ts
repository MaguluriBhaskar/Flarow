import { NgModule }  from '@angular/core';
import { RouterModule,Routes,Router }  from '@angular/router'


import { LoginComponent }  from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { HeaderBodyComponent } from './header-body/header-body.component';
import { DashboardComponent }  from './dashboard/dashboard.component';



const router : Routes = [
 
 { path:'',component:HeaderBodyComponent,pathMatch:'full'},
 { path:'login',component:LoginComponent},
 { path:'register',component:RegisterComponent},
 { path: 'user', component: DashboardComponent, loadChildren: 'app/dashboard/app.dashboard.module#AppDashboardModule' }

];

@NgModule({
	imports:[RouterModule.forRoot(router)],
	exports:[RouterModule]
})

export class AppRouter {

}
