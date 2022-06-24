import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ActiveGuard } from './active.guard';
import { MerchantComponent } from './merchant/merchant.component';
import { DeactiveGuard } from './deactive.guard';

export const Approutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    //1. configure
    canActivate: [ActiveGuard],
  },
  {
    path: 'merchant',
    component: MerchantComponent,
    canDeactivate: [DeactiveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
