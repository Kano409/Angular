import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';

const routes: Routes = [
  {
    path: 'book',
    component: BookComponent,
  },
  {
    path: 'detail',
    component: BookdetailsComponent,
    outlet: 'bookList',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
