import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarComponent } from './car-list/car/car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarFormComponent } from './car-form/car-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalComponent } from './rental-list/rental/rental.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarComponent,
    CarFormComponent,
    UserFormComponent,
    RentalListComponent,
    RentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
