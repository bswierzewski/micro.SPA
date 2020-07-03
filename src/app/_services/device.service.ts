import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../_models/Device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  baseUrl = environment.deviceUrl + 'devices/';

  constructor(private http: HttpClient) { }

  getDevice(id): Observable<Device> {
    return this.http.get<Device>(this.baseUrl + id);
  }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.baseUrl);
  }
}
