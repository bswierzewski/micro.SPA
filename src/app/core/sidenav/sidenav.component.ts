import { Component, EventEmitter, Output } from '@angular/core';
import { MenuGroups } from '../navigation-data/MenuItem';
import { MenuGroup } from '../../shared/components/menu-button/models';
import { AuthService } from '../services';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  @Output() closeSidenav = new EventEmitter();
  menuGroups: MenuGroup[];

  constructor(public authService: AuthService) {
    this.menuGroups = MenuGroups;
  }

  onClose(): void {
    this.closeSidenav.emit();
  }

  onLogout(): void {
    this.authService.logout();
  }
}
