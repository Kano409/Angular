import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyComponent } from './company/company.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {
    path: 'person',
    component: PersonComponent,
  },
  {
    path: 'company',
    component: CompanyComponent,
  },
  {
    path: 'company-list',
    component: CompanyListComponent,
  },
  // bydefault page is open at this routing
  {
    path: '',
    redirectTo: '/person',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
