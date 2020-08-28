import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavbarService } from '../_services/side-navbar-service.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  @ViewChild(MatSidenav) sideNav: MatSidenav;
  constructor(private sideNavbarService: SideNavbarService) {
    this.sideNavbarService.toggleSideNavbar.subscribe(() => {
      this.sideNav.toggle();
    });
  }

  ngOnInit(): void {}
}
