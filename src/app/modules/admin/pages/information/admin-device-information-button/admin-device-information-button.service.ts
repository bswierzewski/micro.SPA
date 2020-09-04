import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminDeviceInformationButtonService {
  clear: BehaviorSubject<void> = new BehaviorSubject(null);
  reset: BehaviorSubject<void> = new BehaviorSubject(null);
  submit: BehaviorSubject<void> = new BehaviorSubject(null);

  constructor() {}
}
