import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//5. import service
import { BookService } from './book.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { testdata } from './testdata';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, InMemoryWebApiModule.forRoot(testdata), HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
