import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { SideNavbarService } from '../_services/side-navbar-service.service';

@Component({
  selector: 'app-admin-base',
  templateUrl: './admin-base.component.html',
  styleUrls: ['./admin-base.component.scss'],
})
export class AdminBaseComponent implements OnInit {
  @ViewChild(MatSidenav) matDrawer: MatSidenav;
  constructor(private sideNavbarService: SideNavbarService) {
    this.sideNavbarService.toggleSideNavbar.subscribe(() => {
      this.matDrawer.toggle();
    });
  }
  ngOnInit(): void {}
}
