import { LoginComponent } from './views/login/login.component';
import { LoginService } from './views/login/login.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";
import { CommonService } from "./common/services/common.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  })

export class AppComponent {
  title = 'App Component!';
  private login_user;
 
 constructor(private commonService: CommonService ) {
   this.commonService.getLogin().subscribe(data=>{
    this.login_user=data
   })
  }

}
