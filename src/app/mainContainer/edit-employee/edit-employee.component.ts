import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

import { MainEmployeeService } from '../mainEmployee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  employeeId:number;
  constructor(
    private fb:FormBuilder,
    private empService: MainEmployeeService,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
    this.createEmployeeForm();
  }
  
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.employeeId = params.id;
      this.empService.getEmployeeDetailsById(+this.employeeId).subscribe((data) => {
          this.employeeForm.controls['name'].patchValue(data.name);
          this.employeeForm.controls['designation'].patchValue(data.designation);
          this.employeeForm.controls['email'].patchValue(data.email);
          this.employeeForm.controls['gender'].patchValue(data.gender);
        });
    });
  }

  createEmployeeForm() {
    this.employeeForm = this.fb.group({
      name: ['name', Validators.required],
      designation: ["",Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
    });
    this.employeeForm.get('name').valueChanges.subscribe((value) => {});
  }

  handleSubmit() {
    if (this.employeeForm.invalid) {
      console.log('Invalid name value');
      return;
    }
    this.empService.editEmp(this.employeeId, { ...this.employeeForm.value }).subscribe((data) => {
        console.log(data);
        this.employeeForm.reset();
        this.router.navigateByUrl('/edit');
      });
  }

}
