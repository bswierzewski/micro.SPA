import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kind } from 'src/app/modules/models/device-information/Kind';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class KindInformationService {
  kindsUrl = environment.baseUrl + '/kinds';

  constructor(private http: HttpClient) {}

  getKinds(): Observable<Kind[]> {
    return this.http.get<Kind[]>(this.kindsUrl);
  }

  addKind(kind: Kind): Observable<any> {
    return this.http.post(this.kindsUrl, kind);
  }

  removeKind(id: number): Observable<any> {
    return this.http.delete(this.kindsUrl + `/${id}`);
  }
}
