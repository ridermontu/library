import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http : Http) { }
    
    getUser(param: String) {
    
    return this.http.post('http://localhost:8080/library/login',param).map((res: Response)=>res.json());
    }
    
    }


