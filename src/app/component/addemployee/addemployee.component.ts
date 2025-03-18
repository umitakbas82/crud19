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
@Component({
  selector: 'app-addemployee',
  imports: [MatCardModule, ReactiveFormsModule,MatFormFieldModule,MatButtonModule,MatInputModule,MatSelectModule,MatDatepickerModule,MatIconModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddemployeeComponent {

  header = '+ Add New'

  empForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl("", Validators.required),
    doj: new FormControl(new Date, Validators.required),
    role: new FormControl("", Validators.required),
    salary: new FormControl(0, Validators.required)
  })


  SaveEmp(){
    if(this.empForm.valid){

    }
  }
}
