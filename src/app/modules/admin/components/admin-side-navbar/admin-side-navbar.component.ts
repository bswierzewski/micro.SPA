import { Component, OnInit } from '@angular/core';
import { SideNavbarService } from 'src/app/modules/_services/side-navbar-service.service';

@Component({
  selector: 'app-admin-side-navbar',
  templateUrl: './admin-side-navbar.component.html',
  styleUrls: ['./admin-side-navbar.component.scss'],
})
export class AdminSideNavbarComponent implements OnInit {
  constructor(public sideNavbarService: SideNavbarService) {}

  ngOnInit(): void {}

  openSideNavbar(): void {
    this.sideNavbarService.toggleSideNavbar.emit();
  }
}
