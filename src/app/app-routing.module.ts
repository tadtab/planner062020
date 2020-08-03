import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputFieldComponent } from './input-field/input-field.component';
import { AppComponent } from './app.component';
import { PlannerComponent } from './planner/planner.component';
import { ErrorComponent } from './error/error.component';
import { PlanFormComponent } from './plan-form/plan-form.component';

const routes: Routes = [
{path: 'addTestInput', component: InputFieldComponent},
{path: 'addPlan', component: PlanFormComponent},
{path: '**', component: ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
