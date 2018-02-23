import { Component } from '@angular/core';

import { WatchService } from './watch.service';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _watch: WatchService) {}
  ngOnInit(){
    this._watch.watchData()
    .subscribe(res =>{
      ///map data here

        let heartRate = res
        let steps = res
        let watchData = []
    })

    .this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels:  watchData,
        datasets: [
          {
            data: heartRate,
            borderColor: '#3cba9f',
            fill: false
          },
          {
            data: steps,
            borderColor: '#3cba9f',
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }], 
          yAxes: [{
            display: true
          }]
        }
        }
      }
    )

  }
}
