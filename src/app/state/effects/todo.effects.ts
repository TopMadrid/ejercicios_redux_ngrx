import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "../../services/todo.service";
import { catchError, exhaustMap, map, of } from "rxjs";
import { loadTaskDetails, loadTaskDetailsFailed, taskDetailsLoaded } from "../actions/todo.actions";

@Injectable()
export class TodoEffects {
    private action$ = inject(Actions);
    private todoSservice =inject(TodoService);

    loadTasks$ = createEffect(() => this.action$.pipe(
            ofType('[Todo List] Obtener la lista de tareas'),
            exhaustMap(() => 
                this.todoSservice.getTasks()
                    .pipe(
                        map((items) => ({
                            type: '[Todo List] Guardar tareas en el Store',
                            tasks: items,
                        }))

            ))

        ))
    
// task.effects.ts
loadTaskDetails$ = createEffect(() =>
    this.action$.pipe(
      ofType('[Task] Load Task Details'),
      exhaustMap(({ taskId }) =>
        this.todoSservice.getTaskDetails(taskId)
      .pipe(
          map(details => 
            taskDetailsLoaded({ taskId, details })
            ),
          catchError(error => 
            of(loadTaskDetailsFailed({ error })
        ))
        )
      )
    )
  );
  

}