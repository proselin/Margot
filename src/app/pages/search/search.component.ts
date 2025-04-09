import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mgr-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  standalone : true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

}
