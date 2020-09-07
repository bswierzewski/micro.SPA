import { Injectable } from '@angular/core';
import { DeviceComponent } from 'src/app/modules/models/device-information/DeviceComponent';

@Injectable({
  providedIn: 'root',
})
export class ComponentInformationService {
  constructor() {}

  addComponent(name: string): void {}

  removeComponent(name: string): void {}
}
