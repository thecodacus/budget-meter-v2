import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.inerface';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {
  user: IUser
  constructor() {
    this.user = {
      id: "user123",
      displayName: "Anirban",
      email: "anirbankar21@gmail.com",
      profileUrl: "/assets/img/user.jpg"
    }
  }

  ngOnInit(): void {
  }

}
