import { Component } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {
  tasks    : Task[] = [];
  new_task : Task   = {};

  constructor (
    private tasks_service : TasksService,
  ){

  }

  ngOnInit(){
    this
      .tasks_service
      .index(true)
      .subscribe((tasks)=>{
        this.tasks = tasks;
      });
  }

  deleteTask(task:Task){
    if(!confirm(
      "Are you sure?"
    )){
      return
    }

    this
      .tasks_service
      .delete(task)
      .subscribe(()=>{
        this.ngOnInit()
      });
  }
}
