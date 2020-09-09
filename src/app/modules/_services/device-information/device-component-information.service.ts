import { Injectable } from '@angular/core';
import { DeviceComponent } from 'src/app/modules/models/device-information/DeviceComponent';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DeviceComponentInformationService {
  baseUrl = environment.baseUrl;

  constructor() {}

  getDeviceComponents(): Observable<DeviceComponent[]> {
    return of([]);
  }

  addDeviceComponent(name: string): void {}

  removeDeviceComponent(name: string): void {}
}
