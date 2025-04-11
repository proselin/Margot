import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LayoutComponent} from './shared/components/layout/layout.component';
import {provideTauri} from './common/services/tauri';
import {TauriImplService} from './common/services/tauri/tauri-impl.service';
import {TauriMockService} from './common/services/tauri/tauri-mock.service';

@Component({
  selector: 'mgr-root',
  imports: [RouterOutlet, LayoutComponent],
  template: `
    <mgr-layout>
      <router-outlet></router-outlet>
    </mgr-layout>`,
  standalone: true,
  providers: [
    provideTauri(),
    TauriImplService,
    TauriMockService
  ]
})
export class AppComponent {
  title = 'Margiet';
}
