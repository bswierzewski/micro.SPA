import { Kind } from 'src/app/shared/models';
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

  getKind(id: number): Observable<Kind> {
    return this.http.get<Kind>(this.kindsUrl + `/${id}`);
  }

  getKinds(): Observable<Kind[]> {
    return this.http.get<Kind[]>(this.kindsUrl);
  }

  addKind(kind: Kind): Observable<any> {
    return this.http.post(this.kindsUrl, kind);
  }

  updateKind(kind: Kind): Observable<any> {
    return this.http.put(this.kindsUrl + `/${kind.id}`, kind);
  }

  removeKind(id: number): Observable<any> {
    return this.http.delete(this.kindsUrl + `/${id}`);
  }
}
