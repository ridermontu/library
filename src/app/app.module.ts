import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Route, RouterModule } from '@angular/router';


import { appRoutes } from '../app/routing-config/approutes';
import { AppComponent } from './app.component';
import { CommonService } from './common/services/common.service';
import { RegistrationComponent } from './views/registration/registration.component';
import { BooksComponent } from './views/books/books.component';
import { HeaderComponent } from './html-design/header/header.component';
import { FooterComponent } from './html-design/footer/footer.component';
import { NavigationBarComponent } from './html-design/navigation-bar/navigation-bar.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { IssuebookComponent } from './views/issuebook/issuebook.component';
import { AddbookComponent } from './views/addbook/addbook.component';





@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    BooksComponent,
    HeaderComponent,
    FooterComponent,
    NavigationBarComponent,
    LoginComponent,
    ProfileComponent,
    IssuebookComponent,
    AddbookComponent,
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
