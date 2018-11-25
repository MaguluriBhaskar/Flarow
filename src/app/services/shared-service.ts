import { Injectable }  from '@angular/core';
import { Router }  from '@angular/router';

@Injectable()

export class SharedService {

	constructor(private router:Router){

	}

	isLogin(){
		if(localStorage.getItem('id')){
			return true;
		}
		else{
			this.router.navigate(["/"]);
		}
	}

	logout(){
         localStorage.clear();
         this.router.navigate(["/"]);
	}

	getPropertyType(type:any){
       return type=='R'?"Room":type=='A'?'Apartment':type=='F'?"Flat":'N/A';
	}

	getPropertyLocation(type:any){
	   return type=='1'?"Hyderabad":type=='2'?'Bangloore':type=='3'?"Mumbai":'N/A';
	}
}