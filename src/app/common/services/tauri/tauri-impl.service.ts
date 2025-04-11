import {inject, Injectable} from '@angular/core';
import {invoke} from '@tauri-apps/api/core';
import {from, tap} from 'rxjs';
import {LoadingGlobalService} from '../../../shared/services/loading';
import { TauriService } from './tauri.service';


@Injectable({
  providedIn: 'root'
})
export class TauriImplService implements TauriService     {
  private readonly loadingGlobalService = inject(LoadingGlobalService);

  sayHello() {
    return this.loadingGlobalService.wrapLoading(from(invoke('greet', {name: 'World'})).pipe(
      tap((value) => {
        console.log(value)
      })
    ))
  }


  check() {
    return this.loadingGlobalService.wrapLoading(from(invoke('checkHealth', {})).pipe(
      tap((value) => {
        console.log(value)
      })
    ))
  }

}
