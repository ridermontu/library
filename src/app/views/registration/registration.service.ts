import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';

@Injectable()
export class RegistrationService {
  
  constructor(private http: Http) { }
  
  saveUser(pram : string){
  return this.http.post('http://localhost:8080/library/user',pram).map((res: Response)=>res.json());
  }

}
