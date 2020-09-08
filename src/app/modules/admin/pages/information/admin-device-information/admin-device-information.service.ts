import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IAdminDeviceInformation } from './IAdminDeviceInformation';

@Injectable({
  providedIn: 'root',
})
export class AdminDeviceInformationService<T extends IAdminDeviceInformation> {
  dataSource$: Observable<T[]>;
  removeSubject$: Subject<any> = new Subject();
  clearSubject$: Subject<any> = new Subject();
  selectionChangeSubject$: Subject<T> = new Subject();

  constructor() {}
}
