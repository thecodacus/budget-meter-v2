import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-value',
  templateUrl: './card-value.component.html',
  styleUrls: ['./card-value.component.scss']
})
export class CardValueComponent implements OnInit {
  @Input() title: string | null = null
  @Input() value: string | null = null
  @Input() icon: string | null = null
  @Input() meta: string | null = null
  @Input() color: string | null = null
  constructor() { }

  ngOnInit(): void {
  }

}
