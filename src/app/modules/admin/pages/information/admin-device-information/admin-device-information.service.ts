import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, Subscription } from 'rxjs';
import { IAdminDeviceInformation } from './IAdminDeviceInformation';

@Injectable({
  providedIn: 'root',
})
export class AdminDeviceInformationService<T extends IAdminDeviceInformation> {
  dataSource$: Observable<T[]>;
  removeSubject$: BehaviorSubject<void> = new BehaviorSubject(null);
  clearSubject$: BehaviorSubject<void> = new BehaviorSubject(null);
  resetSubject$: BehaviorSubject<void> = new BehaviorSubject(null);
  submitSubject$: BehaviorSubject<void> = new BehaviorSubject(null);
  selectionChangeSubject$: BehaviorSubject<T> = new BehaviorSubject(null);

  constructor() {
    console.log('Create new instance');
  }
}
