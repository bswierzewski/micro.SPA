import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SideNavbarService } from '../_services/side-navbar-service.service';

@Component({
  selector: 'app-admin-base',
  templateUrl: './admin-base.component.html',
  styleUrls: ['./admin-base.component.scss'],
})
export class AdminBaseComponent implements OnInit {
  @ViewChild(MatDrawer) matDrawer: MatDrawer;
  constructor(private sideNavbarService: SideNavbarService) {
    this.sideNavbarService.toggleSideNavbar.subscribe(() => {
      this.matDrawer.toggle();
    });
  }
  ngOnInit(): void {}
}
