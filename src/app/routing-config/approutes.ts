/**
 * New typescript file
 */
import { AppComponent } from '../app.component';
import { AddbookComponent } from '../views/addbook/addbook.component';
import { RegistrationComponent } from '../views/registration/registration.component';
import { BooksComponent } from '../views/books/books.component';
import { IssuebookComponent } from '../views/issuebook/issuebook.component';
import { LoginComponent } from '../views/login/login.component';
import { ProfileComponent } from '../views/profile/profile.component';

import { Routes } from '@angular/router';
export const appRoutes:Routes=[
 { path: '',pathMatch:"full", redirectTo:"login"},
  { path: 'registration', component: RegistrationComponent,pathMatch:"full"},
  { path: 'home', component: AppComponent,pathMatch:"full"},
  { path: 'books' , component: BooksComponent, pathMatch: "full"},
  { path: 'login' , component: LoginComponent, pathMatch: "full"},
  {path :'profile',component:ProfileComponent,pathMatch:"full"},
  {path:'issuebook',component:IssuebookComponent,pathMatch:"full"},
  {path:'addbook',component:AddbookComponent,pathMatch:"full"}
]