import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BookserviceService } from './bookservice.service';

@NgModule({
  declarations: [AppComponent, BookComponent, BookdetailsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [BookserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
