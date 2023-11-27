import { Component } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from '../task';
import {forkJoin, Observable} from "rxjs";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks    : Task[] = [];
  new_task : Task   = {};

  constructor (
    private tasks_service : TasksService,
  ){

  }

  ngOnInit(){
    this
      .tasks_service
      .index()
      .subscribe((tasks)=>{
        this.tasks = tasks;
      });
  }

  addNewTask(){
    if(this.new_task.title == undefined){
      return;
    }
    this.new_task.archived = false;
    this.new_task.completed = false;

    this.tasks.unshift(this.new_task);

    this
      .tasks_service
      .post(this.new_task)
      .subscribe(()=>{
        this.new_task = {};
        this.ngOnInit();
      })
  }

  updateTask(task:Task){
    this
      .tasks_service
      .put(task)
      .subscribe({
        error: (err)=>{
          alert(err);
          this.ngOnInit();
        }
      })
  }

  isOverdue(task:Task):boolean{
    if(task.deadline == null){ return false; }
    let d = new Date(task.deadline);
    let now = new Date();
    return d < now;
  }

  archiveCompleted() {
    const observables: Observable<any>[] = [];
    for (const task of this.tasks) {
      if (task.completed == false) {
        continue;
      }
      task.archived = true;
      observables
        .push(
          this
            .tasks_service
            .put(task)
        );
    }
    forkJoin(observables)
      .subscribe(() => {
        this.ngOnInit();
      });
  }
}
