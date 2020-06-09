
import * as fromAppAction from '../store/app.action';
import {Plan} from '../common/plan';

export interface State {
    planList: Plan[],
    editedItem: Plan,
    isEditMode: boolean,
    editedItemIndex: number
}

export const initialState: State = {
    planList: [new Plan("123", 12, "12ax", new Date(), new Date())], 
    isEditMode: false,
    editedItem: null,
    editedItemIndex: -1
}

export function appReducer(state = initialState, action: fromAppAction.inputActionTypes){
    switch(action.type){

        case fromAppAction.GET_INPUT:
            return {
                ...state
            }
            break;
        case fromAppAction.ADD_INPUT:
            return { 
                ...state,
                planList: [...state.planList, action.payload]
            }
            break;
        case fromAppAction.DELETE_INPUT: 
            state.planList.splice(action.payload, 1);
            return {
                ...state
            }
            break;
        case fromAppAction.START_EDIT:
            const itemToBeEdited = state.planList[action.payload]; 
            const itemIndexToBeEdited = action.payload;
            return {
                ...state, 
                editedItem: itemToBeEdited,
                editedItemIndex: itemIndexToBeEdited
            }

        case fromAppAction.EDIT_ITEM: 
            const plan = state.planList[state.editedItemIndex];
            const updatedPlan = {
                ...plan, 
                ...action.payload
            }

            const plans = [...state.planList];

            plans[state.editedItemIndex] = updatedPlan;
            
            return {
                ...state, 
                planList: plans,
                editedItem: null,
                editedItemIndex: -1
            }
            default: 
                return {
                    ...state
                }
    }
}