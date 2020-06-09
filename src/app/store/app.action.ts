import {Action} from '@ngrx/store';
import { Ingredient } from '../common/Ingredient';
import { Plan } from '../common/plan';

export const ADD_INPUT = "add_input";
export const GET_INPUT = "get_input";
export const DELETE_INPUT = "delete_input";
export const START_EDIT = "start_edit"
export const EDIT_ITEM = "edit_idem";

export class getInput implements Action {
    readonly type = GET_INPUT;
}

export class addInput implements Action {
    readonly type = ADD_INPUT;
    constructor(public payload: Plan){}
}

export class deleteInput implements Action {
    readonly type = DELETE_INPUT;
    constructor(public payload: number){}
}

export class startEdit implements Action{
    readonly type = START_EDIT;
    constructor(public payload: number){}
}

export class editItem implements Action {
    readonly type = EDIT_ITEM;
    constructor(public payload: Plan){}
}

export type inputActionTypes = getInput 
    | addInput
    | deleteInput 
    | startEdit
    | editItem;