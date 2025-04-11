import {Injectable} from '@angular/core';
import {TauriService} from './tauri.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TauriMockService implements TauriService {
    sayHello(): Observable<unknown> {
        return of("OKE")
    }
    check(): Observable<unknown> {
      return of("OKE")
    }

}
