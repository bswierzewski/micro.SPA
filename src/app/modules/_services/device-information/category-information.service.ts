import { Injectable } from '@angular/core';
import { Category } from 'src/app/modules/models/device-information/Category';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryInformationService {
  baseUrl = environment.baseUrl;

  constructor() {}

  data: Category[] = [{ name: 'Pierwsza' }, { name: 'Druga' }];

  getCategories(): Observable<Category[]> {
    return of(this.data);
  }

  addCategory(name: string): void {
    this.data.push({ name });
  }

  removeCategory(data: Category): void {
    this.data = this.data.filter((x) => x.name !== data.name);
  }
}
