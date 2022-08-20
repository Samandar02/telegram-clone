import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Message, User } from './models/message';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private initialUser: User[] = [
    {
      id: 1,
      firstName: "John",
      lastName: "",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
      latestMessage: "Hi how are you",
      latestOnline: new Date("2022,08,17"),
      isRead: true,
      phoneNumber: "998901233212"
    },
    {
      id: 2,
      firstName: "Alisa",
      lastName: "",
      image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?cs=srgb&dl=pexels-mentatdgt-1024311.jpg&fm=jpg",
      latestMessage: "Hi how are you",
      latestOnline: new Date("2022,08,18"),
      isRead: false,
      phoneNumber: "998932312134"
    },
    {
      id: 3,
      firstName: "Alon",
      lastName: "",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      latestMessage: "Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
      latestOnline: new Date("2022,08,17"),
      isRead: false,
      phoneNumber: "998906434643"
    },
    {
      id: 4,
      firstName: "Fredirica",
      lastName: "",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
      latestMessage: "it look like readable English.",
      latestOnline: new Date("2022,08,18"),
      isRead: true,
      phoneNumber: "998951203978"
    },
    {
      id: 5,
      firstName: "Jonson",
      lastName: "",
      image: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
      latestMessage: "It is a long established fact that",
      latestOnline: new Date("2022,08,17"),
      isRead: false,
      phoneNumber: "998972903822"
    },
    {
      id: 6,
      firstName: "Alex",
      lastName: "",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
      latestMessage: "Are you ready",
      latestOnline: new Date("2022,08,17"),
      isRead: true,
      phoneNumber: "998942932011"
    }
  ]
  private messages: Message[] = [
    {
      id: 1,
      messages: [
        { id: 1, mode: 0, message: "Hello" },
        { id: 2, mode: 1, message: "Hello How are you" },
        { id: 3, mode: 1, message: "Howit is your going" },
        { id: 4, mode: 0, message: "Ok" },
      ]
    },
    {
      id: 2,
      messages: [
        { id: 1, mode: 0, message: "Salom" },
        { id: 2, mode: 1, message: "Qalaysiz" },
        { id: 3, mode: 1, message: "ishlar yaxshimi" },
        { id: 4, mode: 0, message: "HA" },
        { id: 5, mode: 0, message: "uzingdachi" },
        { id: 6, mode: 0, message: "bulyaptimi" },
      ]
    },
    {
      id: 3,
      messages: [
        { id: 1, mode: 1, message: "Salom" },
        { id: 2, mode: 1, message: "Qalaysiz" },
        { id: 3, mode: 1, message: "ishlar yaxshimi" },
        { id: 4, mode: 0, message: "HA" },
        { id: 5, mode: 0, message: "uzingdachi" },
        { id: 6, mode: 0, message: "bulyaptimi" },
      ]
    },
    {
      id: 4,
      messages: [
        { id: 1, mode: 0, message: "Bugun havo yahshiya" },
        { id: 2, mode: 1, message: "Qalaysiz" },
        { id: 3, mode: 0, message: "HA" },
        { id: 4, mode: 1, message: "ishlar yaxshimi" },
        { id: 5, mode: 0, message: "uzingdachi" },
        { id: 6, mode: 0, message: "bulyaptimi" },
      ]
    },
    {
      id: 5,
      messages: [
        { id: 1, mode: 0, message: "Assalom aleykum" },
        { id: 2, mode: 1, message: "Valeykum assalom" },
        { id: 3, mode: 1, message: "YAxshimisan" },
        { id: 4, mode: 0, message: "HA" },
        { id: 5, mode: 0, message: "uzizvhi" },
        { id: 6, mode: 0, message: "yaxshimisiz" },
      ]
    },
    {
      id: 6,
      messages: [
        { id: 1, mode: 0, message: "In publishing and graphic" },
        { id: 2, mode: 1, message: "Lorem ipsum is a placeholder text" },
        { id: 3, mode: 1, message: "commonly used to demonstrate " },
        { id: 4, mode: 0, message: "visual form of a document " },
        { id: 5, mode: 0, message: "a typeface without" },
        { id: 6, mode: 0, message: " before final" },
      ]
    },
  ]
  constructor() { }
  getUsers(){
    return of(this.initialUser)
  }
  getMessage(id:number){
    return of(this.messages[id-1]?.messages);
  }
  sendMessage(toId:number,message:string){
    let searchedUserMessages = this.messages.filter(m=>m.id==toId)[0]
    let searchedUserMessagesId = this.messages.indexOf(searchedUserMessages)
    let maxid = -1;
    this.messages[searchedUserMessagesId].messages.forEach(r=>maxid = Math.max(r.id,maxid))
    this.messages[searchedUserMessagesId].messages.push({id:maxid,message:message,mode:0})
  }
}
