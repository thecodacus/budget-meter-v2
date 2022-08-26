import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-card-budget-summary',
  templateUrl: './card-budget-summary.component.html',
  styleUrls: ['./card-budget-summary.component.scss']
})
export class CardBudgetSummaryComponent implements OnInit, AfterViewInit {
  @ViewChild('chart', { static: true }) canvas!: ElementRef;
  @ViewChild('chartbackground', { static: true }) canvasBackground!: ElementRef;
  chart!: Chart;
  chartBackground!: Chart;
  @Input() spent: number = 62;
  @Input() budget: number = 100;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    Chart.overrides.doughnut.cutout = '60%';
    Chart.defaults.devicePixelRatio = 5
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'doughnut',
      options: {
        responsive: true,
        clip: false,
        layout: {
          padding: 2
        },
        plugins: {
          legend: {
            display: false
          }
        }
      },
      data: {
        labels: [
          'Spent',
          'Safe To Spend'
        ],
        datasets: [{
          label: 'Budget',
          data: [62, 38],
          backgroundColor: [
            '#DE526C',
            '#EBEBEB00'
          ],
          hoverOffset: 2,
          borderRadius: 50,
          borderWidth: 0
        }]
      },
    })
    this.chartBackground = new Chart(this.canvasBackground.nativeElement.getContext('2d'), {
      type: 'doughnut',
      options: {
        responsive: true,
        rotation: 45,
        clip: false,
        layout: {
          padding: 2
        },
        plugins: {
          legend: {
            display: false
          }
        }
      },
      data: {
        labels: [
          'Spent',
          'Safe To Spend'
        ],
        datasets: [{
          label: 'Budget',
          data: [1],
          backgroundColor: [
            '#EBEBEB'
          ],
          hoverOffset: 1,
          borderRadius: 0,
          borderWidth: 0
        }]
      },
    })

  }

}
