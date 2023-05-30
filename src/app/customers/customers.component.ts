import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectCustomerList } from './store/customers.selector';
import { AppState } from '../appState.store';
import { Customer } from './store/customers.model';
import { Observable } from 'rxjs';
import { addCustomer } from './store/customers.action';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  customers$!: Observable<Customer[]>;
  customerForm!:FormGroup;

  dummyCustomer : Customer = {
    firstName: 'Mario',
    lastName: 'Lopez',
    age: 47
  };
  constructor(
    private store: Store<AppState>) {
    this.customerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
    })
  }

  ngOnInit() {
    //#### STORE is an Observable and we can subscribe to it
    // this.store.subscribe((state)=>{
    //   console.log('store state logged in angular way', state);
    // })

    //#### works in both ways
    // this.customers = this.store.pipe(select(selectCustomerList));
    this.customers$ = this.store.select(selectCustomerList);

  }

  addCustomer (customer:Customer){
    this.store.dispatch(addCustomer({customer}))
  }

  onSubmit() {
    if (this.customerForm.valid) {
      console.log(this.customerForm.value);
      this.addCustomer(this.customerForm.value);
      this.customerForm.reset();
      
    } else {
      alert('form INVALID');
    }
  }
}