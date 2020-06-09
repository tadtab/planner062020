import {ActionReducerMap} from '@ngrx/store';
import * as fromAppStore from '../store/app.reducer';

export interface AppState {
    inputReducer: fromAppStore.State
}

export const RootReducer: ActionReducerMap<AppState> = {
    inputReducer: fromAppStore.appReducer
}