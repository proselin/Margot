import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mgr-settings',
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  standalone : true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {

}
