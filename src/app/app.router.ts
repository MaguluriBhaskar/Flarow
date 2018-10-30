import { NgModule }  from '@angular/core';
import { RouterModule,Routes,Router }  from '@angular/router'

import { LoginComponent }  from './login/login.component';
import { RegisterComponent } from './register/register.component'

const router : Routes = [
 
 { path:'',component:LoginComponent,pathMatch:'full'},
 { path:'login',component:LoginComponent},
 { path:'register',component:RegisterComponent}

];

@NgModule({
	imports:[RouterModule.forRoot(router)],
	exports:[RouterModule]
})

export class AppRouter {

}
