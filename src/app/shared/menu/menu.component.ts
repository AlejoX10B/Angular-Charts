import { Component } from '@angular/core';

interface MenuItem {
  route: string;
  text:  string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li { cursor: pointer }
  `]
})
export class MenuComponent {

  menu: MenuItem[] = [
    { route: '/charts/bars', text: 'Barras' },
    { route: '/charts/double-bars', text: 'Barras dobles' },
    { route: '/charts/donut', text: 'Dona' },
    { route: '/charts/donut-http', text: 'Dona Http' },
  ];

}
