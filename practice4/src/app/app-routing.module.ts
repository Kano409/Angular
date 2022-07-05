import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';
import { ActiveGuard } from './active.guard';
import { DeactiveGuard } from './deactive.guard';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'book',
    component: BookListComponent,
    canActivate: [ActiveGuard],
  },
  {
    path: 'about',
    component: AboutUsComponent,
    canDeactivate: [DeactiveGuard],
  },
  // {
  //   path: '',
  //   redirectTo: 'about',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
