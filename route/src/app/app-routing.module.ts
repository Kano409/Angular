import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopageComponent } from './nopage/nopage.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

const routes: any = [
  // {
  //   Path: '',
  //   redirectTo: 'studentdetails',
  //   pathMatch: 'full',
  // },
  {
    path: 'abc',
    component: StudentComponent,
  },
  {
    path: 'studentdetails',
    component: StudentdetailsComponent,
  },
  {
    path: '**',
    component: NopageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
