import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../_models/Device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  baseUrl = environment.deviceUrl;

  constructor(private http: HttpClient) { }

  getDevice(id): Observable<Device> {
    return this.http.get<Device>(this.baseUrl + id);
  }

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.baseUrl + 'devices/');
  }

  getLocator(id): Observable<Device> {
    return this.http.get<Device>(this.baseUrl + 'devices/locators/' + id);
  }

  getLocators(): Observable<Device[]> {
    return this.http.get<Device[]>(this.baseUrl + 'devices/locators');
  }

  getScanner(id): Observable<Device> {
    return this.http.get<Device>(this.baseUrl + 'devices/scanners/' + id);
  }

  getScanners(): Observable<Device[]> {
    return this.http.get<Device[]>(this.baseUrl + 'devices/scanners');
  }
}
