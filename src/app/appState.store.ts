import { combineReducers } from "@ngrx/store";
import { CustomerState } from "./customers/store/customers.model";
import { TodosState } from "./todos/store/todos.model";
import { todosReducer } from "./todos/store/todos.reducer";
import { customerReducer } from "./customers/store/customers.reducers";

export interface AppState {
    customers: CustomerState;
    todos: TodosState;
}

export const appReducer = combineReducers({
    customers: customerReducer,
    todos: todosReducer
});

