import { Injectable } from '@angular/core';
import { KindService } from './kind-service';
import { CategoryService } from './category-service';
import { ComponentService } from './component-service';

@Injectable({
  providedIn: 'root',
})
export class DeviceInformationService {
  kindService: KindService = new KindService();
  categoryService: CategoryService = new CategoryService();
  componentService: ComponentService = new ComponentService();

  constructor() {}
}
