import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-kind-list',
  templateUrl: './admin-kind-list.component.html',
  styleUrls: ['./admin-kind-list.component.scss'],
})
export class AdminKindListComponent implements OnInit {
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
  constructor() {}

  ngOnInit(): void {}
}
