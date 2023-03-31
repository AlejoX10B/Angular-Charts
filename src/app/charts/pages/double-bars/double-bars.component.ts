import { Component } from '@angular/core';
import { ChartData } from 'chart.js/dist/types';

@Component({
  selector: 'app-double-bars',
  templateUrl: './double-bars.component.html',
  styles: [
  ]
})
export class DoubleBarsComponent {

  proveedoresData: ChartData = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      { data: [ 100, 200, 300, 400, 500 ], label: 'Vendedor A' },
      { data: [ 50, 250, 30, 450, 200 ], label: 'Vendedor B' },
    ]
  }

  productoData: ChartData = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      { data: [ 200, 300, 400, 300, 100 ], label: 'Carros', backgroundColor: 'blue' }
    ]
  };

}
