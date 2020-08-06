import { Component, OnInit } from '@angular/core';
import { SideNavbarService } from 'src/app/modules/_services/side-navbar-service.service';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss'],
})
export class HomeNavbarComponent implements OnInit {
  constructor(public sideNavbarService: SideNavbarService) {}

  ngOnInit(): void {}

  openSideNavbar(): void {
    this.sideNavbarService.toggleSideNavbar.emit();
  }
}
