import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styles: [
  ]
})
export class BarChartComponent implements OnInit {


  barChartType: ChartType = 'bar';
  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };

  @Input() isHorizontal: boolean = false;

  @Input() barChartData: ChartData = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#76E1FC' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#7DF5B7' },
      { data: [ 4, 12, 50, 19, 44, 27, 2 ], label: 'Series C', backgroundColor: '#72E0D0' },
    ]
  };

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  ngOnInit() {
    if (this.isHorizontal) {
      this.barChartOptions!.indexAxis = 'y';
      this.barChartOptions!.scales!['y']!.min = 0;
    }
  }

  /*chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }) {
    //console.log(event, active);
  }

  chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }) {
    //console.log(event, active);
  }*/

  randomize() {
    this.barChartData.datasets.forEach((g) => {

      let data: number[] = []

      g.data.forEach(() => {
        data.push(Math.round(Math.random() * 100))
      });

      g.data = data;
    });

    this.chart?.update();
  }
}
