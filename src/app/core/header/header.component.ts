import { Component, EventEmitter, Output } from '@angular/core';
import { MenuGroups } from '../navigation-data/MenuItem';
import { MenuGroup } from '../../shared/components/menu-button/models';
import { AuthService } from '../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sidenavToogle = new EventEmitter();
  menuGroups: MenuGroup[];

  constructor(private authService: AuthService) {
    this.menuGroups = MenuGroups;
  }

  onToggleSidenav(): void {
    this.sidenavToogle.emit();
  }

  onLogout(): void {
    this.authService.logout();
  }
}
