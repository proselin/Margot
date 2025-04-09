import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzFooterComponent } from 'ng-zorro-antd/layout';

@Component({
  selector: 'mgr-footer',
  imports: [NzFooterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone : true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
