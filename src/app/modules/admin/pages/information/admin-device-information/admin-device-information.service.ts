import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminDeviceInformationService<T> {
  listSource$: Observable<string[]>;
  removeSubject$: BehaviorSubject<void>;
  clearSubject$: BehaviorSubject<void>;
  resetSubject$: BehaviorSubject<void>;
  submitSubject$: BehaviorSubject<void>;
  constructor() {
    console.log('Create new instance');
  }
}
