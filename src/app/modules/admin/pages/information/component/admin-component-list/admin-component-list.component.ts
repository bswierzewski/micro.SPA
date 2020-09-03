import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-component-list',
  templateUrl: './admin-component-list.component.html',
  styleUrls: ['./admin-component-list.component.scss'],
})
export class AdminComponentListComponent implements OnInit {
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
  constructor() {}

  ngOnInit(): void {}
}
