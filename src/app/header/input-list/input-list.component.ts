import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {HttpClient} from '@angular/common/http';

import * as planStore from '../../root/root.reducer';
import { Plan } from 'src/app/common/plan';
import { Greeting } from 'src/app/common/Greeting';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.css']
})
export class InputListComponent implements OnInit {

  planLists: Plan[];
  greeting: Greeting;
  isEditMode: boolean;

  constructor(private Store: Store<planStore.AppState>, private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("http://localhost:8080/plan/get").subscribe((data: Plan[]) => {
      console.log(data);

      this.planLists = [...data];
    });
     console.log("Test data");
    this.Store.select('inputReducer').subscribe(data => {
      this.planLists = data.planList;
    })
  }

  clearInputField(){}
  getGreeted(){}
}
