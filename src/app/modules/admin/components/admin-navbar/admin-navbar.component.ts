import { Component, OnInit } from '@angular/core';
import { SideNavbarService } from 'src/app/modules/_services/side-navbar-service.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss'],
})
export class AdminNavbarComponent implements OnInit {
  constructor(public sideNavbarService: SideNavbarService) {}

  ngOnInit(): void {}

  openSideNavbar(): void {
    this.sideNavbarService.toggleSideNavbar.emit();
  }
}
