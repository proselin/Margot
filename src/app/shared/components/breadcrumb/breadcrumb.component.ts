import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb';

@Component({
  selector: 'mgr-breadcrumb',
  imports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  standalone : true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent {

}
