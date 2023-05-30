import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/appState.store";
import { Customer, CustomerState } from "./customers.model";

export const selectCustomers = (state:AppState) => state["customers"].customers;

export const selectCustomerList = createSelector(
    selectCustomers,
    (state: Customer[]) => state 
);