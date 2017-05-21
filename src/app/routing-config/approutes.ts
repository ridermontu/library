/**
 * New typescript file
 */
import { AppComponent } from '../app.component';
import { RegistrationComponent } from '../views/registration/registration.component';
import { Routes } from '@angular/router';
export const appRoutes:Routes=[
 { path: '',pathMatch:"full", redirectTo:"home"},
  { path: 'registration', component: RegistrationComponent,pathMatch:"full"},
  { path: 'home', component: AppComponent,pathMatch:"full"},
]