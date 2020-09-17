import { Version } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  versionUrl = environment.baseUrl + '/versions';

  constructor(private httpClient: HttpClient) {}

  getVersions(): Observable<Version[]> {
    return this.httpClient.get<Version[]>(this.versionUrl);
  }

  addVersion(version: Version): Observable<any> {
    return this.httpClient.put(this.versionUrl, version);
  }

  removeVersion(id: number): Observable<any> {
    return this.httpClient.delete(this.versionUrl + `/${id}`);
  }
}
