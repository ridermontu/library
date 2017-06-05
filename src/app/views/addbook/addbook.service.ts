import { Injectable, OnInit } from '@angular/core';

import { Http,Response } from '@angular/http';

@Injectable()
export class AddbookService  {

  constructor(private http:Http,) { }
  
  getCategory(){
  return this.http.get('http://localhost:8080/library/bookbyname').map((res: Response)=> res.json());
  }
  
  

}
