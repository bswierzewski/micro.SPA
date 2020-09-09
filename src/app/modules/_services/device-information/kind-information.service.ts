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

  addKind(kind: Kind): Observable<Kind[]> {
    return this.http.post<Kind[]>(this.kindsUrl, kind);
  }

  removeKind(id: number): Observable<Kind[]> {
    return this.http.delete<Kind[]>(this.kindsUrl + `/${id}`);
  }
}
