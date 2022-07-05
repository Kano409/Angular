import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './book.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './testdata';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TestData),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
