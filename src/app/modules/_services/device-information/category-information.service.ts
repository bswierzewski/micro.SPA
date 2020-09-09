import { Injectable } from '@angular/core';
import { Category } from 'src/app/modules/models/device-information/Category';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryInformationService {
  baseUrl = environment.baseUrl;

  constructor() {}

  getCategories(): void {}

  addCategory(name: string): void {}

  removeCategory(data: Category): void {}
}
