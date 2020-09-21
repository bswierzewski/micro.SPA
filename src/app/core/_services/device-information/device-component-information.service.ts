import * as models from 'src/app/shared/models';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeviceComponentInformationService {
  deviceComponentUrl = environment.deviceUrl + 'components';

  constructor(private httpClient: HttpClient) {}

  getDeviceComponents(categoryId?: number): Observable<models.DeviceComponent[]> {
    let params = new HttpParams();

    if (categoryId) {
      params = params.append('categoryId', categoryId.toString());
    }

    return this.httpClient.get<models.DeviceComponent[]>(this.deviceComponentUrl, {
      params,
    });
  }

  addDeviceComponent(deviceComponent: models.DeviceComponent): Observable<any> {
    return this.httpClient.post(this.deviceComponentUrl, deviceComponent);
  }

  updateDeviceComponent(deviceComponent: models.DeviceComponent): Observable<any> {
    return this.httpClient.put(this.deviceComponentUrl + `/${deviceComponent.id}`, deviceComponent);
  }

  removeDeviceComponent(id: number): Observable<any> {
    return this.httpClient.delete(this.deviceComponentUrl + `/${id}`);
  }
}
