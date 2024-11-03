import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   tasks: Todo[] = [
    { id: 1, name: 'Tarea 1', completed: false },
    { id: 2, name: 'Tarea 2', completed: true },
    { id: 3, name: 'Tarea 3', completed: false }
  ];

  getTasks() {
    return of(this.tasks)
      .pipe(
        delay(1500)
      );
  }
  
  getTaskDetails(taskId: number){
    let tasksFilter = this.tasks.find((resp) => resp.id==taskId )
    return of(tasksFilter)
      .pipe(
        delay(1500)
      );

  }
}
