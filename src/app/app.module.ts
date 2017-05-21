import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Route, RouterModule } from '@angular/router';


import { appRoutes } from '../app/routing-config/approutes';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { BooksComponent } from './views/books/books.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    BooksComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
