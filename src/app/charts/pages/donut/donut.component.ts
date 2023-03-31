import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other' ],
    datasets: [
      { data: [ 350, 450, 100, 5 ], backgroundColor: '#76E1FC' },
      { data: [ 50, 150, 120, 90 ], backgroundColor: '#7DF5B7' },
      { data: [ 250, 130, 70, 123 ], backgroundColor: '#72E0D0' },
      { data: [ 250, 130, 70,432 ], backgroundColor: '#7284e0' },
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

}
