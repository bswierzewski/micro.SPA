import { Component, EventEmitter, Output } from '@angular/core';
import { MenuGroups, MenuGroup } from '../navigation-data/MenuItem';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Output() closeSidenav = new EventEmitter();
  menuGroups: MenuGroup[];

  constructor() {
    this.menuGroups = MenuGroups;
  }

  onClose(): void {
    this.closeSidenav.emit();
  }
}
