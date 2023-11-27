import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Task } from "./task";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  base_url : string = "http://localhost:32723/todos";

  constructor(
    private http: HttpClient,
  ){

  }

  public index(archived = false): Observable<Task[]> {
    return this.http.get<Task[]>(
      this.base_url,
      {
        params:{
          archived: archived,
          _sort: 'id',
          _order: 'desc',
        }
      }
    );
  }

  public post(task: Task): Observable<Task> {
    return this.http.post(
      this.base_url,
      task
    );
  }

  public put(task: Task): Observable<Task> {
    return this.http.put(
      this.base_url + `/${task.id}`,
      task
    );
  }

  public delete(task: Task): Observable<any> {
    return this.http.delete(
      this.base_url + `/${task.id}`
    )
  }
}