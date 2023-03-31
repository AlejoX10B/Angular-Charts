import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

import { ChartsService } from '../../services/charts-service.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styles: [
  ]
})
export class DonutHttpComponent implements OnInit {

  doughnutChartType: ChartType = 'doughnut';

  doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: []
  };


  constructor(
    private cs: ChartsService
  ) { }

  ngOnInit(): void {
    this.cs.getChartData().subscribe(({ labels, values}) => {
      this.doughnutChartData.labels = labels;
      this.doughnutChartData.datasets = [{ data: values }]
    });
  }

}
