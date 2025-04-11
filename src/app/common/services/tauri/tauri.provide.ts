import {FactoryProvider, InjectionToken} from '@angular/core';
import {TauriMockService} from './tauri-mock.service';
import {TauriImplService} from './tauri-impl.service';
import {TauriService} from './tauri.service';

export const TAURI_SERVICE_TOKEN = new InjectionToken<TauriService>("TAURI_SERVICE_TOKEN");

export const provideTauri = (): FactoryProvider => {

  //@ts-ignore
  const isTauri = !!window['__TAURI__'];
  console.log(`Tauri is ${isTauri}`)
  if (isTauri) {
    return {
      provide: TAURI_SERVICE_TOKEN,
      deps: [TauriImplService],
      multi: true,
      useFactory: (service: TauriImplService) => service,
    }
  }
  return {
    provide: TAURI_SERVICE_TOKEN,
    deps: [TauriMockService],
    useFactory: (service: TauriMockService) => service,
  }
}
