import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Kind } from 'src/app/modules/models/device-information/Kind';

@Injectable({
  providedIn: 'root',
})
export class KindInformationService {
  constructor(private http: HttpClient) {}

  addKind(name: string): void {
    return;
  }

  removeKind(name: string): void {
    return;
  }
}
