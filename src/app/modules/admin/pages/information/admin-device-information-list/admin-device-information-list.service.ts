import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminDeviceInformationListService {
  clear: BehaviorSubject<void> = new BehaviorSubject(null);

  constructor() {}
}
