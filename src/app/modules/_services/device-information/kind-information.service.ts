import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kind } from 'src/app/modules/models/device-information/Kind';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class KindInformationService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getKinds(): Observable<Kind[]> {
    return of([]);
  }

  addKind(name: string): void {
    return;
  }

  removeKind(name: string): void {
    return;
  }
}
