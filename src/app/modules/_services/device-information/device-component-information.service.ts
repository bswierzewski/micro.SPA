import { Injectable } from '@angular/core';
import { DeviceComponent } from 'src/app/modules/models/device-information/DeviceComponent';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeviceComponentInformationService {
  deviceComponentUrl = environment.baseUrl + '/components';

  constructor(private httpClient: HttpClient) {}

  getDeviceComponents(): Observable<DeviceComponent[]> {
    return this.httpClient.get<DeviceComponent[]>(this.deviceComponentUrl);
  }

  addDeviceComponent(deviceComponent: DeviceComponent): Observable<any> {
    return this.httpClient.put(this.deviceComponentUrl, deviceComponent);
  }

  removeDeviceComponent(id: number): Observable<any> {
    return this.httpClient.delete(this.deviceComponentUrl + `/${id}`);
  }
}
