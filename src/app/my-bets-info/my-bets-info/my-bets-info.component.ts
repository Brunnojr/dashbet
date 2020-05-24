import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Chart from 'chart.js';


@Component({
  selector: 'app-my-bets-info',
  templateUrl: './my-bets-info.component.html',
  styleUrls: ['./my-bets-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyBetsInfoComponent implements OnInit {

  canvas: any;
  ctx: any;

  constructor() { }

  ngOnInit() {
    const ctx = document.getElementById('myChart');
    let myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Reds', 'Greens'],
          datasets: [{
              data: [20, 80],
              backgroundColor: [
                  '#FF0000',
                  '#18bb4b',
              ]
          }]
      },
      options: {
        tooltips: {
          enabled: true
        }
      }
    });
  }

}
