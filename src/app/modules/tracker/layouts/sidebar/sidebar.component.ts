import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  data: any[] = [
    {
      name: "Dashboard",
      icon: "fa-solid fa-chart-pie",
      link: "/"
    }, {
      name: "Transactions",
      icon: "fa-solid fa-chart-pie",
      link: "/"
    }, {
      name: "Accounts",
      icon: "fa-solid fa-chart-pie",
      link: "/"
    }, {
      name: "Third Parties",
      icon: "fa-solid fa-chart-pie",
      link: "/"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
