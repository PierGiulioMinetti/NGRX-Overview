import { createReducer, on } from "@ngrx/store";
import { CustomerState } from "./customers.model";
import * as CustomerActions from "./customers.action";

export const initialState: CustomerState = {
    customers: [
        {
            firstName: "Marlon",
            lastName: "Brando",
            age: 80,
        },
        {
            firstName: "Nicholas",
            lastName: "Cage",
            age: 62,
        }
    ],
    loading: false,
    error: null,
    status: 'pending'
}

export const customerReducer = createReducer(
    initialState,
    on(CustomerActions.addCustomer, (state, {customer}) => ({...state, customers:[...state.customers, customer]})),
    on(CustomerActions.loadCustomer, (state => ({...state, status:'loading'})),
    // on(CustomerActions.loadCustomerSuccess, (state, {customer}) => ({
    //     ...state, 
    //     customers:[...state.customers, customer],
    //     error: null
    // })),
));