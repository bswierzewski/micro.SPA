import { Category } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryInformationService {
  categoriesUrl = environment.backendUrl + 'categories';

  constructor(private httpClient: HttpClient) {}

  getCategory(id: number): Observable<Category> {
    return this.httpClient.get<Category>(this.categoriesUrl + `/${id}`);
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.categoriesUrl);
  }

  addCategory(category: Category): Observable<any> {
    return this.httpClient.post(this.categoriesUrl, category);
  }

  updateCategory(category: Category): Observable<any> {
    return this.httpClient.put(this.categoriesUrl + `/${category.id}`, category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.httpClient.delete(this.categoriesUrl + `/${id}`);
  }
}
