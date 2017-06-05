import { CommonService } from '../../common/services/common.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  
})
export class HeaderComponent implements OnInit {
private user:string;
  
 // userFname :EventEmitter<string> =new EventEmitter();
  constructor(private commonService: CommonService) { 
 console.log(localStorage.getItem("userfname"));
   this.commonService.getuserFname().subscribe(data=>{
    this.user=data
   })
    
    
  }

  ngOnInit() {
    
   
  }

}
