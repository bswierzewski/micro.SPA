import { Component, OnInit } from '@angular/core';
import { SideNavbarService } from 'src/app/modules/_services/side-navbar-service.service';

@Component({
  selector: 'app-home-side-navbar',
  templateUrl: './home-side-navbar.component.html',
  styleUrls: ['./home-side-navbar.component.scss'],
})
export class HomeSideNavbarComponent implements OnInit {
  constructor(public sideNavbarService: SideNavbarService) {}

  ngOnInit(): void {}

  openSideNavbar(): void {
    this.sideNavbarService.toggleSideNavbar.emit();
  }
}
