import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputFieldComponent } from './header/input-field/input-field.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlannerComponent } from './planner/planner.component';
import { ErrorComponent } from './error/error.component';
import { InputListComponent } from './header/input-list/input-list.component';
import { PlanFormComponent } from './plan-form/plan-form.component';

const routes: Routes = [{path: '', component: HomeComponent},
{path: 'addTestInput', component: InputFieldComponent},
{path: 'addPlan', component: PlanFormComponent},
{path: 'planList', component: InputListComponent},
{path: '**', component: ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
