import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()


export class BaseService {
 
  baseUrl:any='http://192.168.43.28:1638';

	constructor(private http:Http){

	}

	post(url:any,body:any): Observable<any> {
      return this.http.post(this.baseUrl+url,body).map((res)=>res.json())
      .catch((error:any) => {
        return Observable.throw(error.json());
      });
   }

   get(url:any): Observable<any> {
      return this.http.get(this.baseUrl+url).map((res)=>res.json())
      .catch((error:any) => {
        return Observable.throw(error.json());
      });
   }

   delete(url:any,optional?:any): Observable<any> {
      return this.http.delete(this.baseUrl+url,optional).map((res)=>res.json())
      .catch((error:any) => {
        return Observable.throw(error.json());
      });
   }
}