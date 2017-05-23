import { RegistrationService } from './registration.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers:[RegistrationService]
})
export class RegistrationComponent implements OnInit {
  
  private saveUser;
  public myForm: FormGroup;
  constructor(private _fb: FormBuilder ,private registrationservice: RegistrationService) { }

  ngOnInit() {
    this.myForm = this._fb.group({
     firstName: [''], lastName: [''], email: [''], mobile: [''], password: ['']

    })

  }
  save(data) {
    console.log(data);
  this.registrationservice.saveUser(data).subscribe(data=>{
this.saveUser=data;
},
    error=>{
  
});
  }
}



