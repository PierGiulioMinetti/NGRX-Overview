import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectCustomerList } from './store/customers.selector';
import { AppState } from '../appState.store';
import { Customer } from './store/customers.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  public customers$!: Observable<Customer[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    // STORE is an Observable and we can subscribe to it
    // this.store.subscribe((state)=>{
    //   console.log('store state logged in angular way', state);
    // })

    // this.customers = this.store.pipe(select(selectCustomerList));
    // works in both ways
    this.customers$ = this.store.select(selectCustomerList);

  }

}