import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../_models/Device';
import { DeviceType } from '../_models/DeviceType';
import { DeviceKind } from '../_models/DeviceKind';
import { AddDevice } from '../_models/AddDevice';
import { UpdateDevice } from '../_models/UpdateDevice';

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

  getLocatrosName(): any {
    const dictNames = {};
    this.http.get<Device[]>(this.deviceUrl + 'type/1').subscribe(
      data => {
        data.map(item => {
          dictNames[item.macAddress] = item.name;
        });
      }
    );
    return dictNames;
  }

  addDevice(device: AddDevice): Observable<any> {
    return this.http.post(this.deviceUrl + 'add', device);
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

  addKind(kind: DeviceKind): Observable<any> {
    return this.http.post(this.kindUrl + 'add', kind);
  }

  updateDevice(device: UpdateDevice): Observable<any> {
    return this.http.post(this.deviceUrl + 'update', device);
  }
}
