import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

 private users;
  public myloginForm: FormGroup;
  
  constructor(private _fb: FormBuilder, private loginservice :LoginService) { }

  ngOnInit() {
    
    this.myloginForm = this._fb.group({
    
    email: [''], password: ['']
    })
    
    
    }
    save(data){
  
  console.log(data);
  this.loginservice.getUser(data).subscribe(data1=>{
     this.users=data;
    
},
error=>{
  
});
  
  }
//getdata(data){
//  var books=data;
//  
//  
//}

}
;    


    
    
  
  

