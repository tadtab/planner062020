import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { FormsModule } from '@angular/forms';
import {RootReducer} from './root/root.reducer';
import { StoreModule } from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import { PlannerComponent } from './planner/planner.component';
import { ErrorComponent } from './error/error.component';
import { PlanFormComponent } from './plan-form/plan-form.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    PlannerComponent,
    ErrorComponent,
    PlanFormComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(RootReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
