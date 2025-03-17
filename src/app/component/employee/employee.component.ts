import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddemployeeComponent } from '../addemployee/addemployee.component';

@Component({
  selector: 'app-employee',
  imports: [MatCardModule,MatButtonModule,MatIconModule,MatDialogModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
constructor(private dialog:MatDialog){}

  addEmployee(){
    this.dialog.open(AddemployeeComponent)
  }
}
