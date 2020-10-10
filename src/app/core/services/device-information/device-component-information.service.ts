import { DeviceComponent } from 'src/app/shared/models';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeviceComponentInformationService {
  deviceComponentUrl = environment.backendUrl + 'components';

  constructor(private httpClient: HttpClient) {}

  getDeviceComponent(id: number): Observable<DeviceComponent> {
    return this.httpClient.get<DeviceComponent>(this.deviceComponentUrl + `/${id}`);
  }

  getDeviceComponents(categoryId?: number): Observable<DeviceComponent[]> {
    let params = new HttpParams();

    if (categoryId) {
      params = params.append('categoryId', categoryId.toString());
    }

    return this.httpClient.get<DeviceComponent[]>(this.deviceComponentUrl, {
      params,
    });
  }

  addDeviceComponent(deviceComponent: DeviceComponent): Observable<any> {
    return this.httpClient.post(this.deviceComponentUrl, deviceComponent);
  }

  updateDeviceComponent(deviceComponent: DeviceComponent): Observable<any> {
    return this.httpClient.put(this.deviceComponentUrl + `/${deviceComponent.id}`, deviceComponent);
  }

  removeDeviceComponent(id: number): Observable<any> {
    return this.httpClient.delete(this.deviceComponentUrl + `/${id}`);
  }
}
