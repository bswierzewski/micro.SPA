import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-category-create',
  templateUrl: './admin-category-create.component.html',
  styleUrls: ['./admin-category-create.component.scss'],
})
export class AdminCategoryCreateComponent implements OnInit {
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
  selectedComponents: any;
  panelOpenState: any;
  constructor() {}

  ngOnInit(): void {}
}
