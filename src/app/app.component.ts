import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public options: any;




  constructor() {
    this.options = {
      type: 'column',
      legend: {
        enabled: false
      },

      series: [
        {
          data: [{
            item: 'Coffee',
            value: 700,
          }],
          xKey: 'item', yKey: 'value', fill: '#7393B3', stroke: '#7393B3', tooltip: { renderer: () => 'first' }, grouped: false
        },
        {
          data: [{
            item: 'Tea',
            value: 520,
          }],
          xKey: 'item', yKey: 'value', fill: '#8A9A5B', stroke: '#8A9A5B', tooltip: { renderer: () => 'two' }, grouped: false
        },
        {
          data: [{
            item: 'Milk',
            value: 200,
          }],
          xKey: 'item', yKey: 'value', fill: '#848884', stroke: '#848884', tooltip: { renderer: () => 'three' }, grouped: false
        },
        {
          data: [{
            item: 'Water',
            value: 100,
          }],
          xKey: 'item', yKey: 'value', fill: '#FF5733', stroke: '#FF5733', tooltip: { renderer: () => 'four' }, grouped: false
        },
      ],
    };

  }
}
