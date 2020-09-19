import * as models from 'src/app/shared/models';
import * as paramModels from 'src/app/shared/params';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  devicesUrl = environment.deviceUrl + 'devices';

  constructor(private http: HttpClient) {}

  getDevice(id: number): Observable<models.Device> {
    return this.http.get<models.Device>(this.devicesUrl + `/${id}`);
  }

  getDevices(deviceParams: paramModels.DeviceParams = null): Observable<models.Device[]> {
    let headerParams = new HttpParams();

    if (deviceParams?.kindId) {
      headerParams = headerParams.append('kindId', deviceParams.kindId?.toString());
    }
    if (deviceParams?.categoryId) {
      headerParams = headerParams.append('categoryId', deviceParams.categoryId.toString());
    }

    if (deviceParams?.componentIds && deviceParams?.componentIds.length > 0) {
      return this.http
        .get<models.Device[]>(this.devicesUrl, {
          params: headerParams,
        })
        .pipe(map((devices) => devices.filter((x) => deviceParams.componentIds.includes(x.deviceComponent.id))));
    } else {
      return this.http.get<models.Device[]>(this.devicesUrl, {
        params: headerParams,
      });
    }
  }

  addDevice(kind: models.Device): Observable<any> {
    return this.http.post(this.devicesUrl, kind);
  }

  deleteDevice(id: number): Observable<any> {
    return this.http.delete(this.devicesUrl + `/${id}`);
  }
}
