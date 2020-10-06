import { Component, EventEmitter, Output } from '@angular/core';
import { MenuGroups, MenuGroup } from '../data/MenuItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sidenavToogle = new EventEmitter();
  menuGroups: MenuGroup[];

  constructor() {
    this.menuGroups = MenuGroups;
  }

  onToggleSidenav(): void {
    this.sidenavToogle.emit();
  }
}
