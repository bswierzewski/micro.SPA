import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Device } from 'src/app/modules/Models/Device';
import { DeviceParams } from 'src/app/modules/_services/Params/DeviceParams';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  devicesUrl = 'http://localhost:3000' + '/devices';

  constructor(private http: HttpClient) {}

  getDevices(deviceParams: DeviceParams = null): Observable<Device[]> {
    let params = new HttpParams();

    if (deviceParams?.kindId) {
      params = params.append('kindId', deviceParams.kindId?.toString());
    }
    if (deviceParams?.categoryId) {
      params = params.append('categoryId', deviceParams.categoryId.toString());
    }

    return this.http.get<Device[]>(this.devicesUrl, {
      params,
    });
  }

  addKind(kind: Device): Observable<any> {
    return this.http.post(this.devicesUrl, kind);
  }

  removeKind(id: number): Observable<any> {
    return this.http.delete(this.devicesUrl + `/${id}`);
  }
}
