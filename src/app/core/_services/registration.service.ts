import { Registration } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  registrationUrl = environment.deviceUrl + 'registrations';

  constructor(private http: HttpClient) {}

  getRegistrations(id: number): Observable<Registration[]> {
    return this.http.get<Registration[]>(this.registrationUrl + `/${id}`);
  }
}
