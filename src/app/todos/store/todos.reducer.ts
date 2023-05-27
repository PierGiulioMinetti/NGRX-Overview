import { createReducer, on } from "@ngrx/store";
import { Todo, TodosState } from "./todos.model";
import * as TodosAction from "./todos.action";

export const initialState: TodosState = {
    todos: [
        {
            id: 1,
            title:  "titolo uno",
            completed: true
        }
    ]
};

export const todosReducer = createReducer(
    initialState,
    on(TodosAction.addTodo, (state, {todo}) => ({...state, todos: [...state.todos, todo]})),
);