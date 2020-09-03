import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SideNavbarService {
  constructor() {}
  public toggleSideNavbar: EventEmitter<any> = new EventEmitter();
}
