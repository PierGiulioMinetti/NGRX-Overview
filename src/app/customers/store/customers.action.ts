import { createAction, props } from "@ngrx/store";
import { Customer } from "./customers.model";

export const addCustomer = createAction('Customer Page], Add Customer', props<{customer:Customer}>());

export const loadCustomer = createAction('[Customer Page], Load Customer');

export const loadCustomerSuccess = createAction('[Customer API], Load Customer Success', props<{customer:Customer[]}>);

export const loadCustomerFailure = createAction('[Customer API], Load Customer Failure', props<{error:string}>);