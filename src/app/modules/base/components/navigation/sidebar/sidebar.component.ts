import { Component, OnInit } from '@angular/core';
import { SideNavbarService } from '../../../../_services/side-navbar.service';
import { ActivatedRoute } from '@angular/router';
import { SideMenuItem } from './Models/SideMenuItem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  sideMenuItems: SideMenuItem[] = [];

  constructor(
    public sideNavbarService: SideNavbarService,
    route: ActivatedRoute
  ) {
    this.sideMenuItems = route.snapshot.data.sideMenuItems;
  }

  ngOnInit(): void {}

  openSideNavbar(): void {
    this.sideNavbarService.toggleSideNavbar.emit();
  }
}
