import { Component, OnInit,Output } from '@angular/core';
import { EmployeeType } from '../type/employee.type';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BestEmployeesService } from '../best-employees/best-employee.service';
import { MainEmployeeService } from '../mainEmployee.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {
   employees: EmployeeType[];
   employeess:any;
   fetchEmpsObj:any;
   seos:any;
   constructor(private empService:MainEmployeeService, private bestEmpService: BestEmployeesService){
   }   

   ngOnInit(): void {
    const observable=this.empService.fetchAll();
    observable.subscribe((data)=>{
      this.fetchEmpsObj=data;
      this.employees=this.fetchEmpsObj.data;
    })
   }

   handleDeleteEmp(id: number) {
    this.empService.removeEmployee(id).subscribe((data)=>{
      this.employees=this.employees.filter(employee=> employee.id !== data.id)
    })
  }

    handleSEO(){
      const observable=this.empService.fetchAll();
      observable.subscribe((data)=>{
        this.fetchEmpsObj=data;
        this.employeess=this.fetchEmpsObj.data;
      })
      this.employees=this.employeess.filter(emp=>emp.designation==="SEO");
    }
    handleMERN(){
      const observable=this.empService.fetchAll();
      observable.subscribe((data)=>{
        this.fetchEmpsObj=data;
        this.employeess=this.fetchEmpsObj.data;
      })
      this.employees=this.employeess.filter(emp=>emp.designation==="Mean Stack Developer");
    }
    handleFreeLancer(){
      const observable=this.empService.fetchAll();
      observable.subscribe((data)=>{
        this.fetchEmpsObj=data;
        this.employeess=this.fetchEmpsObj.data;
      })
      this.employees=this.employeess.filter(emp=>emp.designation==="Freelancer");
    }
    handleCTO(){
      const observable=this.empService.fetchAll();
      observable.subscribe((data)=>{
        this.fetchEmpsObj=data;
        this.employeess=this.fetchEmpsObj.data;
      })
      this.employees=this.employeess.filter(emp=>emp.designation==="CTO");
    }
    handleFullStack(){
      const observable=this.empService.fetchAll();
      observable.subscribe((data)=>{
        this.fetchEmpsObj=data;
        this.employeess=this.fetchEmpsObj.data;
      })
      this.employees=this.employeess.filter(emp=>emp.designation==="Full Stack Developer");
    }
    handleNodeJs(){
      const observable=this.empService.fetchAll();
      observable.subscribe((data)=>{
        this.fetchEmpsObj=data;
        this.employeess=this.fetchEmpsObj.data;
      })
      this.employees=this.employeess.filter(emp=>emp.designation==="Node Js Developer");
    }
    handleDesigner(){
      const observable=this.empService.fetchAll();
      observable.subscribe((data)=>{
        this.fetchEmpsObj=data;
        this.employeess=this.fetchEmpsObj.data;
      })
      this.employees=this.employeess.filter(emp=>emp.designation==="Designer");
    }
    handlePHP(){
      const observable=this.empService.fetchAll();
      observable.subscribe((data)=>{
        this.fetchEmpsObj=data;
        this.employeess=this.fetchEmpsObj.data;
      })
      this.employees=this.employeess.filter(emp=>emp.designation==="PHP Developer");
    }
    handleCEO(){
      const observable=this.empService.fetchAll();
      observable.subscribe((data)=>{
        this.fetchEmpsObj=data;
        this.employeess=this.fetchEmpsObj.data;
      })
      this.employees=this.employeess.filter(emp=>emp.designation==="CEO");
    }
    
  

  handleAddEmp(emp:EmployeeType){
    this.bestEmpService.addItem(emp);
  }

}