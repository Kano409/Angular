import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LogoutComponent } from './logout/logout.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { testdata } from './testdata';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    AboutUsComponent,
    LogoutComponent,
    AddBookComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    InMemoryWebApiModule.forRoot(testdata),
    //InMemoryWebApiModule.forRoot(testdata),
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
