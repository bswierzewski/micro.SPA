import { User } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userUrl = environment.authUrl + 'users';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userUrl);
  }

  activateUser(user: User): Observable<any> {
    return this.httpClient.post(this.userUrl + '/activate', user);
  }
}
