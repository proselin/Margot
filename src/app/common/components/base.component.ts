import {Directive, inject} from "@angular/core";
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {NzMessageService} from 'ng-zorro-antd/message';
import {LoadingGlobalService} from '../../shared/services/loading';
import {TauriService} from '../services/tauri.service';

@Directive()
export abstract class BaseComponent {
  protected readonly notificationService = inject(NzNotificationService)
  protected readonly messageService = inject(NzMessageService);
  protected readonly loadingGlobalService = inject(LoadingGlobalService);
  protected readonly tauriService = inject(TauriService);
}
