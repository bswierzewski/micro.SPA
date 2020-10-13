import { Component, Input, OnInit } from '@angular/core';
import { MenuGroup } from './models';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class MenuButtonComponent implements OnInit {
  @Input() group: MenuGroup;

  constructor() {}

  ngOnInit(): void {}
}
