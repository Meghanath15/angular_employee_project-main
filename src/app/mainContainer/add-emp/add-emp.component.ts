import { Component, OnInit } from '@angular/core';
import { FormControl,Validators,FormGroup, FormBuilder} from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BestEmployeesService } from '../best-employees/best-employee.service';
import { MainEmployeeService } from '../mainEmployee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  employeeForm: FormGroup;

   constructor(private formbuilder:FormBuilder, private bestEmpService: BestEmployeesService, private empService: MainEmployeeService){
    this.createEmployeeForm();
   }

   createEmployeeForm(){
    this.employeeForm=this.formbuilder.group({
      name:["",Validators.pattern('[a-zA-Z ]*')],
      phone_number:["",Validators.pattern('[0-9+]*')],
      email:["",Validators.pattern('[a-zA-Z0-9@.]*')],
      designation:["",Validators.pattern('[a-zA-Z. ]*')],
      gender: ["",Validators.required],
    });

    this.employeeForm.get("name").valueChanges.subscribe(value=>{});
  }

  ngOnInit(): void {}
 

handleSubmit() {
   if(this.employeeForm.invalid){
   console.log('Invalid name value');
   return;
   }

 this.empService.addEmployees({...this.employeeForm.value}).subscribe((data)=>{

 this.employeeForm.reset()
});

}



 generateARandomId(min: number = 1000, max: number = 9999) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
 }

}
