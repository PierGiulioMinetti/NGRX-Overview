export interface Customer{
    firstName: string;
    lastName: string;
    age: number;
}

export interface CustomerState {
    customers: Customer[];
    loading?: boolean;
    error?: null | string;
    status?: 'pending' |'loading' | 'completed' | 'failed';
}