import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzHeaderComponent } from 'ng-zorro-antd/layout';
import { NzMenuDirective } from 'ng-zorro-antd/menu';

@Component({
  selector: 'mgr-header',
  imports: [NzHeaderComponent, NzMenuDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone : true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
