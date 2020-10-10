import { Version } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  versionUrl = environment.microcontrollerUrl + 'versions';

  constructor(private httpClient: HttpClient) {}

  getVersion(id: number): Observable<Version> {
    return this.httpClient.get<Version>(this.versionUrl + `/${id}`);
  }

  getVersions(): Observable<Version[]> {
    return this.httpClient.get<Version[]>(this.versionUrl);
  }

  addVersion(version: Version, file: File): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('Name', version.name);
    formData.append('Major', version.major.toString());
    formData.append('Minor', version.minor.toString());
    formData.append('Patch', version.patch.toString());
    formData.append('kindId', version.kindId.toString());
    formData.append('componentId', version.componentId.toString());
    formData.append('File', file);

    return this.httpClient.post(this.versionUrl, formData);
  }

  updateVersion(id: number, version: Version): Observable<any> {
    return this.httpClient.put(this.versionUrl + `/${id}`, version);
  }

  deleteVersion(id: number): Observable<any> {
    return this.httpClient.delete(this.versionUrl + `/${id}`);
  }
}
