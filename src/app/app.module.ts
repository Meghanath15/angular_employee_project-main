import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AllEmployeesComponent } from './mainContainer/all-employees/all-employees.component';
import { EachEmployeeComponent } from './mainContainer/each-employee/each-employee.component';
import { AddEmpComponent } from './mainContainer/add-emp/add-emp.component';
import { EmployeeDetailsComponent } from './mainContainer/employee-details/employee-details.component';
import { BestEmployeesComponent } from './mainContainer/best-employees/best-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    AllEmployeesComponent,
    EachEmployeeComponent,
    AddEmpComponent,
    EmployeeDetailsComponent,
    BestEmployeesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
