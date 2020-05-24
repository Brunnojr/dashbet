import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
          { title: 'Card 5', cols: 1, rows: 1 },
          { title: 'Card 6', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Banca atual', id: 1, cols: 1, rows: 1},
        { title: 'Card 2', id: 2, cols: 2, rows: 1 },
        { title: 'Histórico de apostas', id: 3, cols: 1, rows: 2 },
        { title: 'Card 4', id: 4, cols: 1, rows: 1 },
        { title: 'Card 5', id: 5, cols: 1, rows: 2 },
        { title: 'Card 6', id: 6, cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
