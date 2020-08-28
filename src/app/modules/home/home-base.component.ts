import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { SideNavbarService } from '../_services/side-navbar-service.service';
@Component({
  selector: 'app-home-base',
  templateUrl: './home-base.component.html',
  styleUrls: ['./home-base.component.scss'],
})
export class HomeBaseComponent implements OnInit {
  @ViewChild(MatSidenav) matDrawer: MatSidenav;
  constructor(private sideNavbarService: SideNavbarService) {
    this.sideNavbarService.toggleSideNavbar.subscribe(() => {
      this.matDrawer.toggle();
    });
  }
  ngOnInit(): void {}
}
