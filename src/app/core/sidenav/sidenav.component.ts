import { Component, EventEmitter, Output } from '@angular/core';
import { MenuGroups } from '../navigation-data/MenuItem';
import { MenuGroup } from '../../shared/components/menu-button/models';

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
