import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

import { Store } from '@ngrx/store';
import {Ingredient} from '../../common/Ingredient';

import * as rootStore from '../../root/root.reducer';
import {State} from '../../store/app.reducer';
import * as inputActions from '../../store/app.action';
import {Greeting} from '../../common/Greeting';
import { Plan } from 'src/app/common/plan';


@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  @ViewChild('f') inputForm: NgForm;
  planLists: Plan[] = [];
  isEditMode: boolean = false;
  itemIndexToBeEdited: number = -1;

  plan: Plan = null;

  greeting: Greeting = "Not Available";

  private planUrl = 'plan/save';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private store: Store<rootStore.AppState>, private http: HttpClient) { }

  ngOnInit() {
    setTimeout(() => 
    this.store.select('inputReducer').subscribe((data: State) => { 
      this.planLists = data.planList;
      this.inputForm.setValue({"name": data.editedItem, 
      "value": data.editedItemIndex})
    })
    , );
  }

  onSubmit(form: NgForm){
    const inputValue = form.value;
    
    const plan = new Plan(inputValue.planName, inputValue.planPoint, inputValue.planDescription, inputValue.planStartDate, inputValue.planEndDate);
    if(!this.isEditMode){
      this.store.dispatch(new inputActions.addInput(plan));
    }else{
      this.store.select("inputReducer").subscribe(data => {
        console.log("Before item index: " + data.editedItemIndex );
      })
      this.store.dispatch(new  inputActions.editItem(plan));
      console.log("Updated plan: " + plan.planDescription);
    }

    
    this.store.select('inputReducer').subscribe((value: State) => {
      this.planLists = value.planList;
    });


      this.http.post("http://localhost:8080/addInput", plan).subscribe(
        (data: Ingredient) => console.log("Data Sent " + data.name)
      );
      this.savePlanList(plan);
      this.clearInputField();
  }

  deleteThis(){
    
    this.store.select('inputReducer').subscribe((value: State) => {
      this.itemIndexToBeEdited = value.editedItemIndex;
        this.planLists = value.planList;
      })
      console.log("index to be edited: " + this.itemIndexToBeEdited); 
     
      this.store.dispatch(new inputActions.deleteInput(this.itemIndexToBeEdited))
      
     this.clearInputField();
  }

  getGreeted(){
    this.http.get("http://localhost:8080/plan/get")
    .subscribe(data => {
      this.greeting = data;
      console.log(data)})
  }

  initiateEditing(index: number){
    console.log("index: " + index);
      this.isEditMode = true;
      this.store.dispatch(new inputActions.startEdit(index));

      this.store.select("inputReducer").subscribe(state => {
        this.plan = state.planList[index];
        console.log("this plan " + this.plan.planDescription);
        this.inputForm.setValue({"planName" : this.plan.planName, "planPoint" : this.plan.planPoint
            , "planDescription": this.plan.planDescription, "planStartDate": this.plan.planStartDate,
            "planEndDate": this.plan.planEndDate});
      })
  }

  clearInputField(){
    this.inputForm.setValue({"planName" : null, "planPoint" : null
            , "planDescription": null, "planStartDate": null,
            "planEndDate": null});
    this.isEditMode = false;
  }

  savePlanList(plan: Plan){
      this.http.post("http://localhost:8080/plan/save", plan).subscribe(data => {
        console.log(data)
      })
  }

}
