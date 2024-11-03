import { Component, inject, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { addTask, getTasks , loadTaskDetails, removeTask, saveTasks, toggleTask} from './state/actions/todo.actions';
import { Todo } from './models/todo.model';
import { Observable } from 'rxjs';
import { selectCompletedTasks, selectPendingTasks, tasksSelector } from './state/selectors/tasks.selector';
import { TodoService } from './services/todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicios - redux_ngrx';
  newTaskDescription: string =''; 
 
  
  store = inject(Store);
  // tasks$: Observable<Todo[]> = new Observable();
  tasks: Todo[] = []; 
  completedTasks: Todo[] = [];
  pendingTasks: Todo[] = [];

  ngOnInit(): void {
    // this.tasks$ = this.store.select(tasksSelector);
    this.store.select(tasksSelector).subscribe(resp => this.tasks = resp); 
    this.store.dispatch(getTasks());
    this.store.select(selectCompletedTasks).subscribe(tasks => this.completedTasks = tasks);
    this.store.select(selectPendingTasks).subscribe(tasks => this.pendingTasks = tasks);

 
    // this.store.dispatch(addTask({ task: this.newTask4 }));
    // this.store.dispatch(addTask({ task: this.newTask5 }));
    // this.store.dispatch(removeTask({ id: 1}));
    // this.store.dispatch(getTasks());
  }

  toggleTask(id: number){
    this.store.dispatch(toggleTask({ id }));
  }
  	
  addNewTask() {
    const newTask: Todo = { id: Date.now(), name: this.newTaskDescription, completed: false };
    this.store.dispatch(addTask({ task: newTask }));
    this.newTaskDescription = '';
  }

  	
  fetchTasks() {
    this.store.dispatch(getTasks());
  }
  	
  loadDetails(taskId: number) {
    this.store.dispatch(loadTaskDetails({ taskId }));
  }
}
