import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { VersionInfo } from '../_models/VersionInfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  constructor(private http: HttpClient) {}

  baseUrl: string = environment.updateDeviceUrl + 'version';

  getAllVersions(): Observable<VersionInfo[]> {
    return this.http.get<VersionInfo[]>(this.baseUrl);
  }
}
