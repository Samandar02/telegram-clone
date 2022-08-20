import { createReducer, on } from "@ngrx/store";
import { Message,IMessage } from "./models/message";
import { User } from "./models/user";
import { getUsers, getMessages,sendMessage } from "./storage.actions";



let initialMessage:IMessage[] = []
// export const userReducer = createReducer(
//     // initialUser,
//     // on(getUsers, state => ({...state}))
// )
// export const storageReducer = createReducer(
//     initialMessage,
//     on(getMessages, (state,{id}) => (messages.filter(user=>user.id == id))[0].messages),
// )
// export const senderReducer = createReducer(
//     initialMessage,
//     on(sendMessage,(state,{sendTo,message})=>{
//         messages.filter(i=>i.id==sendTo)[0].messages.push({})
//         return a
//     })
// )

