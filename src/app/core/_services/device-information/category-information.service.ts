import * as models from 'src/app/shared/models';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryInformationService {
  categoriesUrl = environment.deviceUrl + 'categories';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<models.Category[]> {
    return this.httpClient.get<models.Category[]>(this.categoriesUrl);
  }

  addCategory(category: models.Category): Observable<any> {
    console.log(category);
    return this.httpClient.post(this.categoriesUrl, category);
  }

  removeCategory(id: number): Observable<any> {
    return this.httpClient.delete(this.categoriesUrl + `/${id}`);
  }
}
