import { Injectable } from '@angular/core';
import { Http ,Response  } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  constructor(private http : Http) { }
    
      getUsers(){
     return  this.http.get('http://localhost:8080/library/user').map((res:Response)=>res.json());
    }
//data(res:Response){
//  return res.json();
//}

}
