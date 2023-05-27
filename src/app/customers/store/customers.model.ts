export interface Customer{
    firstName: string;
    lastName: string;
    age: number;
}

export interface CustomerState {
    customers: Customer[];
}