import { BookService } from '../books/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css'],
  providers:[BookService]
})
export class IssuebookComponent implements OnInit {
private books=[];
  private user;
  constructor( private bookservise:BookService) { 
 this.user= localStorage.getItem("user");
  }

  ngOnInit() {
  
  this.bookservise.getBook().subscribe(data=>{
  this.books=data},
  error=>{}
  )
  }

}
