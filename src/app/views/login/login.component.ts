import { LoginService } from './login.service';
import { Component, OnInit,Input } from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { Router, ActivatedRoute} from "@angular/router";
import {CommonService } from "../../common/services/common.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
public edited = false;
   private users:string;
  private userName:string;
  public myloginForm: FormGroup;
  
  constructor(private _fb: FormBuilder,private router: Router,private commonService: CommonService, private route: ActivatedRoute, private loginservice :LoginService) { }

  ngOnInit() {
    
    this.myloginForm = this._fb.group({
    
    email: [''], password: ['']
    })
    
    
    }
    save(data){
  
  
  this.loginservice.getUser(data).subscribe(data1=>{
     this.users=data1.user.firstName;
    
    console.log( this.users);
    localStorage.setItem("userfname",this.users);
   // localStorage.setItem("login","true");
    

    this.router.navigate(['issuebook']);
    this.commonService.changeLogin(true);
    this.commonService.setuserFname(this.users);
    
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


    
    
  
  

