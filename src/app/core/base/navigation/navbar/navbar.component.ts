import { Component, OnInit } from '@angular/core';
import { SideNavbarService } from '../../../_services/side-navbar.service';
import { NavMenuItem } from '../data';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/_services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navMenuItems: NavMenuItem[] = [];
  navExpandedMenuItems: NavMenuItem[] = [];

  constructor(public sideNavbarService: SideNavbarService, route: ActivatedRoute, public authService: AuthService) {
    this.navMenuItems = route.snapshot.data.navMenuItems;
    this.navExpandedMenuItems = route.snapshot.data.navExpandedMenuItems;
  }

  ngOnInit(): void {}

  openSideNavbar(): void {
    this.sideNavbarService.toggleSideNavbar.emit();
  }
}
