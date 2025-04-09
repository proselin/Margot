import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LayoutComponent} from './shared/components/layout/layout.component';

@Component({
  selector: 'mgr-root',
  imports: [RouterOutlet, LayoutComponent],
  template: `
    <mgr-layout>
      <router-outlet></router-outlet>
    </mgr-layout>`,
  standalone: true
})
export class AppComponent {
  title = 'Margiet';
}
