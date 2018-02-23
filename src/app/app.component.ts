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

    })

    .this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels:  watchData,
        datasets: [
          {
            data: hearRate,
            borderColor: '#3cba9f'  
          }
        ]
      }
    })

  }
}
