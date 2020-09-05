import { Injectable } from '@angular/core';
import { Category } from 'src/app/modules/models/device-information/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryInformationService {
  constructor() {}

  addCategory(name: string): void {}

  removeCategory(name: string): void {}
}
