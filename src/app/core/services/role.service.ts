import { Role } from '../../shared/models';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  rolesUrl = environment.authUrl + 'roles';

  constructor(private http: HttpClient) {}

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.rolesUrl);
  }

  addRole(role: Role): Observable<any> {
    return this.http.post(this.rolesUrl, role);
  }

  deleteRole(id: number): Observable<any> {
    return this.http.delete(this.rolesUrl + `/${id}`);
  }
}
