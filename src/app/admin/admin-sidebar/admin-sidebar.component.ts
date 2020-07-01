import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onButtonGroupClick($event) {
    const clickedElement = $event.target || $event.srcElement;

    if (clickedElement.nodeName === 'A') {

      const isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector('.active');
      // if a Button already has Class: .active
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
        isCertainButtonAlreadyActive.classList.remove('noHover');
      }

      clickedElement.className += ' active noHover';
    }
  }
}
