import { Injectable } from '@angular/core';
import { Component } from 'src/app/modules/models/device-information/Component';

@Injectable({
  providedIn: 'root',
})
export class ComponentInformationService {
  constructor() {}

  addComponent(name: string): void {}

  removeComponent(name: string): void {}
}
