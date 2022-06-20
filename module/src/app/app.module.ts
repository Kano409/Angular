import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyModule } from './company/company.module';
import { EmployeeComponent } from './employee/employee.component';
import { MyserviceService } from './myservice.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    // EmployeeloginComponent -> error :-  already declared in company module
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompanyModule, // import module
    FormsModule,
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
