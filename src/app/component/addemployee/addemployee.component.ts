import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { Employee } from '../../models/employeeModelDTO';
import { EmployeeService } from '../../services/employee.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-addemployee',
  imports: [MatCardModule, ReactiveFormsModule,MatFormFieldModule,MatButtonModule,MatInputModule,MatSelectModule,MatDatepickerModule,MatIconModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddemployeeComponent {

  constructor(private service:EmployeeService, private close:MatDialogRef<AddemployeeComponent>){}

  
  header = '+ Add New'

  empForm = new FormGroup({
    id: new FormControl(0,Validators.required),
    name: new FormControl("", Validators.required),
    doj: new FormControl(new Date, Validators.required),
    role: new FormControl("", Validators.required),
    salary: new FormControl(0, Validators.required)
  })
  ref: any;


  SaveEmp(){
    if(this.empForm.valid){
      let _data:Employee={
        id: this.empForm.value.id as number,
        name: this.empForm.value.name as string,
        doj: new Date(this.empForm.value.doj as Date),
        role: this.empForm.value.role as string,
        salary: this.empForm.value.salary as number,
      }
      this.service.postEmp(_data).subscribe(resp=>{
        alert('added');
        this.closepopup();
      })
    }
  }
  
  // roleValue:any=[
  //   {value:"0",viewValue:'manager'},
  //   {value:"1",viewValue:'assistant'},
  //   {value:"2",viewValue:'taco'},

  // ]
closepopup(){
  this.close.close();
}
  
}
