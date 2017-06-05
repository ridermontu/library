
import { AddbookService } from './addbook.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,FormArray } from '@angular/forms';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
  providers: [AddbookService]
})
export class AddbookComponent implements OnInit {
  private categories = [];
private books;
  private addbookform: FormGroup;
  private categorys:FormGroup;
  constructor(private addbookservice: AddbookService, private fbuilder: FormBuilder) { }

  ngOnInit() {
   this.addbookform = this.fbuilder.group({
      book: this.fbuilder.group({
        title: [''], author: ['']
      }),
      categoryofbook:this.fbuilder.array([
        this.fbuilder.group({
          id:['']
        })
      ])
 
    });

    this.addbookservice.getCategory().subscribe(data => {
      this.categories = data;
      console.log(this.categories);
    },
      error => {

      })
  }

save(data){
console.log(data);
};

}
