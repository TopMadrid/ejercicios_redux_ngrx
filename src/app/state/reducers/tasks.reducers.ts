import { createReducer, on } from "@ngrx/store";
import { Todo } from "../../models/todo.model";
import { addTask, removeTask, markTask, saveTasks, toggleTask } from "../actions/todo.actions";

export const initialState: Todo[] = [];

export const todoReducers = createReducer(
    initialState,
    on(addTask, (state, { task }) => [...state, task]),
    on(removeTask, (state, { id }) => state.filter((item) => item.id !== id)),
    on(saveTasks, (state, { tasks }) => [...tasks]),

    on(toggleTask, (state, { id }) => {
        return state.map(task =>
            task.id === id
                ? { ...task, completed: !task.completed }
                : task);
    })
);
