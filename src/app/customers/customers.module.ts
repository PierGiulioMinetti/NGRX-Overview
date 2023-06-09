import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    HttpClientModule  
    // StoreModule.forFeature('customers', customerReducer),
  ]
})
export class CustomersModule { }
