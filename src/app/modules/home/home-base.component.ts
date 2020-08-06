import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SideNavbarService } from '../_services/side-navbar-service.service';
@Component({
  selector: 'app-home-base',
  templateUrl: './home-base.component.html',
  styleUrls: ['./home-base.component.scss'],
})
export class HomeBaseComponent implements OnInit {
  @ViewChild(MatDrawer) matDrawer: MatDrawer;
  constructor(private sideNavbarServiceService: SideNavbarService) {
    this.sideNavbarServiceService.toggleSideNavbar.subscribe(() => {
      this.matDrawer.toggle();
    });
  }
  ngOnInit(): void {}
}
