import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { Employee } from '../../models/employeeModelDTO';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { EmployeeService } from '../../services/employee.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  imports: [MatCardModule,MatButtonModule,MatIconModule,MatDialogModule,MatTableModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit, OnDestroy{

emplist:Employee[]=[];
datatable!:MatTableDataSource<Employee>;
displayedColmuns:string[]=['id','name','role','doj','salary','action'];
subscription=new Subscription()
dataSource!: MatTableDataSource<any>;


constructor(private dialog:MatDialog, private service:EmployeeService){}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
 

ngOnInit(): void {
   
  }

  addEmployee(){
    this.dialog.open(AddemployeeComponent)
  }

  getAllEmp(){
    let sub=this.service.getAll().subscribe(resp=>{
      this.emplist=resp;
      this.dataSource=new MatTableDataSource(this.emplist)
    })
    this.subscription.add(sub);
  }
}
