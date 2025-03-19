import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employeeModelDTO';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

apiUrl='http://localhost:3000/employee'

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getEmp(empId:number){
    return this.http.get<Employee>(this.apiUrl+'/'+empId);
  }

  postEmp(data:Employee){
    return this.http.post(this.apiUrl,data);
  }

  updateEmp(data:Employee){
    return this.http.put(this.apiUrl+'/'+data.id,data);
  }

  deleteEmp(empId:number){
    return this.http.delete(this.apiUrl+'/'+empId);
  }

}
