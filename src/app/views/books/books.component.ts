import { BookService } from './book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers:[BookService]
})
export class BooksComponent implements OnInit {
  private books=[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
  this.bookService.getBook().subscribe(data=>{
     this.books=data;
    
},
error=>{
  
});
  
  }

}
