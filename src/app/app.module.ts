import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputFieldComponent } from './header/input-field/input-field.component';
import { FormsModule } from '@angular/forms';
import {RootReducer} from './root/root.reducer';
import { StoreModule } from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import { PlannerComponent } from './planner/planner.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { InputListComponent } from './header/input-list/input-list.component';
import { PlanFormComponent } from './plan-form/plan-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputFieldComponent,
    PlannerComponent,
    HomeComponent,
    ErrorComponent,
    InputListComponent,
    PlanFormComponent
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
