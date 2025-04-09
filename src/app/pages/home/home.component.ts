import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mgr-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone : true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
