import { ProfileService } from './profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

  private users=[];
  constructor(private profileservice: ProfileService) { }

  ngOnInit() {
  
  this.profileservice.getUsers().subscribe(data=>{
  
  this.users=data;
  })

  }
  }


