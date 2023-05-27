import { createAction, props } from "@ngrx/store";
import {Todo} from "./todos.model"

export const addTodo = createAction('[Todo] Add Todo', props<{ todo: Todo }>());