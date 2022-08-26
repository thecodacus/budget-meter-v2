import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data = [
    {
      title: "TOTAL BALANCE",
      value: "₹20000",
      icon: "fas fa-building-columns",
      meta: "Accross all accounts",
      color: ""
    }, {
      title: "TOTAL EXPENSE",
      value: "₹20000",
      icon: "fas fa-building-columns",
      meta: "Accross all accounts",
      color: ""
    }, {
      title: "TOTAL INCOME",
      value: "₹20000",
      icon: "fas fa-building-columns",
      meta: "Accross all accounts",
      color: ""
    }, {
      title: "SAVED THIS MONTH",
      value: "₹20000",
      icon: "fas fa-building-columns",
      meta: "Accross all accounts",
      color: ""
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
