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

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(this.userUrl + `/${id}`);
  }

  updateUser(user: User): Observable<any> {
    return this.httpClient.put(this.userUrl, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(this.userUrl + `/${id}`);
  }
}
