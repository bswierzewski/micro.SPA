import { Address } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  addressUrl = environment.backendUrl + 'addresses';

  constructor(private http: HttpClient) {}

  getAddresses(): Observable<Address[]> {
    const headerParams = new HttpParams().append('isConfirmed', false.toString());

    return this.http.get<Address[]>(this.addressUrl, { params: headerParams });
  }
}
