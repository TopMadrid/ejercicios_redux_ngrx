import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducers } from './state/reducers/tasks.reducers';
import { TodoEffects } from './state/effects/todo.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideStore(
      {
        todos: todoReducers
      }
    ), 
    provideEffects([TodoEffects]), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
