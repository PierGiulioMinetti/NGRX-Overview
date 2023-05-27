import { createAction, props } from "@ngrx/store";
import { Customer } from "./customers.model";

export const addCustomer = createAction('Customer Page], Add Customer', props<{customer:Customer}>());