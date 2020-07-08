import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateDeviceService {
  constructor(private http: HttpClient) { }

  baseUrl: string = environment.updateDeviceUrl + 'version';

  uploadVersion(
    major: number,
    minor: number,
    patch: number,
    name: string,
    fileToUpload: File,
    kind: number = null,
    type: number = null
  ): Observable<any> {
    const formData: FormData = new FormData();

    formData.append('Major', major.toString());
    formData.append('Minor', minor.toString());
    formData.append('Patch', patch.toString());
    formData.append('KindId', kind?.toString());
    formData.append('TypeId', type?.toString());
    formData.append('Name', name);
    formData.append('File', fileToUpload);

    return this.http.post(this.baseUrl + '/upload', formData);
  }
}
