import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from './mainContainer/employees.service';
import { Observable } from 'rxjs';
import { MainEmployeeService } from './mainContainer/mainEmployee.service';
import { EmployeeType } from './mainContainer/type/employee.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'employee';
  ob:Observable<number>;
  employeee:Observable<EmployeeType[]>;
  constructor(private empService: MainEmployeeService){}

  ngOnInit(): void {
  
  }

  handleFETCH(){
    this.employeee=this.empService.fetchAll();
    console.log(this.employeee)
    
  }
  

}
