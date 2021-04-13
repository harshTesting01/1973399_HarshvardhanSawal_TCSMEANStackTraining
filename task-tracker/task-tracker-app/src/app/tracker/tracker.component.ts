import { Component, OnInit } from '@angular/core';
import { tasks } from '../tasks';
import { TasktrackerService } from '../tasktracker.service';



@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  constructor(public taskTrckr: TasktrackerService) { }

  displayedColumns= ["id", "name", "task", "date"];
  dataSource : tasks[] = [];

  ngOnInit(): void {
    this.taskTrckr.getTask().subscribe(res=>{this.dataSource = res; console.log(res)}, err=>console.log(err));
  }

  storeTask(taskRef: any){
    console.log(taskRef.date);
    this.taskTrckr.storeTask(taskRef);
    //this.loadData();
  }

  // loadData(){
  //   console.log(this.taskTrckr.getTask());
  // }

}
