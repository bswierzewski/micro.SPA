import { Injectable } from '@angular/core';
import { Category } from 'src/app/modules/models/device-information/Category';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryInformationService {
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
