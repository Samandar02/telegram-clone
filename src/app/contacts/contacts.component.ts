import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }
  contacts = [
    {
      firstName: "John",
      lastName: "",
      image:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
      latestMessage: "Hi how are you",
      latestOnline: new Date("2022,08,17"),
      isRead: true,
      phoneNumber:"=998901233212"
    },
    {
      firstName: "Devid",
      lastName: "Bekham",
      image:"https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?cs=srgb&dl=pexels-mentatdgt-1024311.jpg&fm=jpg",
      latestMessage: "Hi how are you",
      latestOnline: new Date("2022,08,18"),
      isRead: false,
      phoneNumber:"=998932312134"
    },
    {
      firstName: "Alon",
      lastName: "",
      image:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      latestMessage: "Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
      latestOnline: new Date("2022,08,17"),
      isRead: false,
      phoneNumber:"=998906434643"
    },
    {
      firstName: "Fredirica",
      lastName: "",
      image:"https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
      latestMessage: "it look like readable English.",
      latestOnline: new Date("2022,08,18"),
      isRead: true,
      phoneNumber:"=998951203978"
    },
    {
      firstName: "Jonson",
      lastName: "",
      image:"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
      latestMessage: "It is a long established fact that",
      latestOnline: new Date("2022,08,17"),
      isRead: false,
      phoneNumber:"=998972903822"
    },
    {
      firstName: "Alex",
      lastName: "",
      image:"https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
      latestMessage: "Are you ready",
      latestOnline: new Date("2022,08,17"),
      isRead: true,
      phoneNumber:"=998942932011"
    }
  ]
  ngOnInit(): void {
  }

}
