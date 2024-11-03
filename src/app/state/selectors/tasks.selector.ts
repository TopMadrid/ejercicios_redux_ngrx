import { createSelector } from "@ngrx/store";
import { Todo } from "../../models/todo.model";
import { AppState } from "../app.state";

export const selectTodos = (state: AppState) => state.todos;
export const tasksSelector = createSelector(
    selectTodos,
    (tasks: Todo[]) =>tasks
); 

export const selectCompletedTasks = createSelector(
    selectTodos,
    tasks => tasks.filter(task => task.completed)
  );
  export const selectPendingTasks = createSelector(
    selectTodos,
    tasks => tasks.filter(task => !task.completed)
  );