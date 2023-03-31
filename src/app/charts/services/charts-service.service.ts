import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(
    private http: HttpClient
  ) { }


  getChartData(): Observable<any>{
    return this.http.get('http://localhost:3000/grafica')
      .pipe(
        delay(1200),
        map(data => {
          const labels = Object.keys(data);
          const values = Object.values(data);
          return { labels, values };
        })
      );
  }

}
