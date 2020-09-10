import { Injectable } from '@angular/core';
import { Category } from 'src/app/modules/models/device-information/Category';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryInformationService {
  categoriesUrl = environment.baseUrl + '/categories';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.categoriesUrl);
  }

  addCategory(category: Category): Observable<any> {
    return this.httpClient.put(this.categoriesUrl, category);
  }

  removeCategory(id: number): Observable<any> {
    return this.httpClient.delete(this.categoriesUrl + `/${id}`);
  }
}
