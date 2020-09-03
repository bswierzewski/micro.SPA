import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceInformationService {
  kinds: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  components: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  categories: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() {}

  addKinds(name: string): void {
    this.kinds.push(name);
  }

  addComponents(name: string): void {
    this.components.push(name);
  }

  addCategories(name: string): void {
    this.categories.push(name);
  }
}
