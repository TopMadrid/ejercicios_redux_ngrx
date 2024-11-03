import { createAction, props } from "@ngrx/store";
import { Todo } from "../../models/todo.model";


export const getTasks = createAction(
  '[Todo List] Obtener la lista de tareas'
);

export const addTask = createAction(
  '[Todo List] Añadir una nueva tarea',
  props<{ task: Todo }>()
);

export const removeTask = createAction(
  '[Todo List] Eliminar una tarea',
  props<{ id: number }>()
);

export const markTask = createAction(
  '[Todo List] Marcar una tarea como terminada',
  props<{ id: number }>()
);

export const saveTasks = createAction(
  '[Todo List] Guardar tareas en el Store',
  props<{ tasks: Todo[] }>()
);


export const loadTaskDetails = createAction(
  '[Task] Load Task Details',
  props<{ taskId: number }>());

export const taskDetailsLoaded = createAction(
  '[Task] Task Details Loaded',
  props<{ taskId: number, details: any }>());

export const loadTaskDetailsFailed = createAction(
  '[Task] Load Task Details Failed',
  props<{ error: any }>());

export const toggleTask = createAction(
  '[Task] Toggle Task', 
  props<{ id: number }>());

