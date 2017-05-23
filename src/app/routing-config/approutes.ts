/**
 * New typescript file
 */
import { AppComponent } from '../app.component';
import { RegistrationComponent } from '../views/registration/registration.component';
import { BooksComponent } from '../views/books/books.component';
import { LoginComponent } from '../views/login/login.component';

import { Routes } from '@angular/router';
export const appRoutes:Routes=[
 //{ path: '',pathMatch:"full", redirectTo:"home"},
  { path: 'registration', component: RegistrationComponent,pathMatch:"full"},
  { path: 'home', component: AppComponent,pathMatch:"full"},
  { path: 'books' , component: BooksComponent, pathMatch: "full"},
  { path: 'login' , component: LoginComponent, pathMatch: "full"}

]