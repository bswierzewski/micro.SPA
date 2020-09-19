import * as models from 'src/app/shared/models';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class KindInformationService {
  kindsUrl = environment.deviceUrl + 'kinds';

  constructor(private http: HttpClient) {}

  getKinds(): Observable<models.Kind[]> {
    return this.http.get<models.Kind[]>(this.kindsUrl);
  }

  addKind(kind: models.Kind): Observable<any> {
    return this.http.post(this.kindsUrl, kind);
  }

  removeKind(id: number): Observable<any> {
    return this.http.delete(this.kindsUrl + `/${id}`);
  }
}
