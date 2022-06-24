import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ActiveGuard } from './active.guard';
import { UserService } from './user.service';
import { Router, RouterModule } from '@angular/router';

//4. roting module -> export const in app-routing
import { Approutes } from './app-routing.module';
import { MerchantComponent } from './merchant/merchant.component';
import { DeactiveGuard } from './deactive.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    MerchantComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(Approutes)],
  providers: [ActiveGuard, UserService, DeactiveGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
