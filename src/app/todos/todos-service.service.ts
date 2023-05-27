import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from './store/todos.model';
import * as TodoActions from "./store/todos.action" 

@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {

  constructor(private store: Store) {

  }

  addTodo(todo: Todo): void {
    this.store.dispatch(TodoActions.addTodo({ todo }));
  }
}
