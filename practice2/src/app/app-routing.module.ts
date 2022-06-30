import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'about-company',
        component: AboutCompanyComponent,
      },
      {
        path: 'about-me',
        component: AboutMeComponent,
      },
    ],
  },
  {
    path: 'about-company',
    component: AboutCompanyComponent,
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
