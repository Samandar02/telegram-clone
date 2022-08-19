import { createAction, props } from "@ngrx/store";

export const getUsers = createAction('[Get] Users');

export const getMessages = createAction('[Get] Messages',props<{id:number}>());
export const sendMessage = createAction('[Send] Messages',props<{sendTo:number,sendFrom:number,message:string}>());