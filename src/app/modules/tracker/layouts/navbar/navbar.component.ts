import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/modules/models/user.inerface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() user: IUser | null = null
  constructor() { }

  ngOnInit(): void {
  }

}
