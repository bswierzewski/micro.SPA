import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../_models/Device';
import { DeviceType } from '../_models/DeviceType';
import { DeviceKind } from '../_models/DeviceKind';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  deviceUrl = environment.deviceUrl + 'devices/';
  kindUrl = environment.deviceUrl + 'devicekinds/';
  typeUrl = environment.deviceUrl + 'devicetypes/';

  constructor(private http: HttpClient) { }

  getDevice(id): Observable<Device> {
    return this.http.get<Device>(this.deviceUrl + id);
  }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.deviceUrl);
  }

  getTypes(): Observable<DeviceType[]> {
    return this.http.get<DeviceType[]>(this.typeUrl);
  }

  addType(type: DeviceType): Observable<any> {
    return this.http.post(this.typeUrl + 'add', type);
  }

  getKinds(): Observable<DeviceKind[]> {
    return this.http.get<DeviceKind[]>(this.kindUrl);
  }

  addKind(type: DeviceKind): Observable<any> {
    return this.http.post(this.kindUrl + 'add', type);
  }
}
