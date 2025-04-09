import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mgr-comic-card',
  imports: [],
  templateUrl: './comic-card.component.html',
  styleUrl: './comic-card.component.scss',
  standalone : true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComicCardComponent {

}
