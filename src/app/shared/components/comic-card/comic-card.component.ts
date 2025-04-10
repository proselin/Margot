import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ComicInfo} from '../../models/types/comic-info';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {NzSkeletonComponent} from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'mgr-comic-card',
  imports: [
    RouterLink,
    NgIf,
    NzSkeletonComponent,
    NgOptimizedImage
  ],
  templateUrl: './comic-card.component.html',
  styleUrl: './comic-card.component.scss',
  standalone : true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComicCardComponent {

  @Input({required: true}) comicInfo!: ComicInfo

}
