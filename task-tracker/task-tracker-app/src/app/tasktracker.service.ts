import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class TasktrackerService {

  constructor(public http: HttpClient) { }

  storeTask(task: any){
    this.http.post("http://localhost:3000/employees",task).subscribe(result=>console.log(result), error=>console.log(error));
  }

  getTask(){
    return this.http.get<tasks[]>("http://localhost:3000/employees");
  }
}
