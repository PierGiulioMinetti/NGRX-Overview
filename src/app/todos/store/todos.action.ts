import { createAction, props } from "@ngrx/store";
import {Todo} from "./todos.model"

export const addTodo = createAction('[Todo Page], Add Todo', props<{ todo: Todo }>());