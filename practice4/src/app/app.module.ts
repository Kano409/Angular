import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookListComponent } from './book-list/book-list.component';
import { ActiveGuard } from './active.guard';
import { UserService } from './user.service';
import { DeactiveGuard } from './deactive.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutUsComponent,
    BookListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ActiveGuard, UserService, DeactiveGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
