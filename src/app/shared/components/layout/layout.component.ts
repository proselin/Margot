import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { NzContentComponent, NzLayoutComponent } from 'ng-zorro-antd/layout';

@Component({
  selector: 'mgr-layout',
  imports: [HeaderComponent, FooterComponent, NzLayoutComponent, NzContentComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone : true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {}
