import { Observable } from "rxjs"


export interface TauriService {
  sayHello(): Observable<unknown>

  check(): Observable<unknown>
}
