import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-component-create',
  templateUrl: './admin-component-create.component.html',
  styleUrls: ['./admin-component-create.component.scss'],
})
export class AdminComponentCreateComponent implements OnInit {
  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
  selectedComponent: any = null;
  panelOpenState: any;
  constructor() {}

  ngOnInit(): void {}

  getCategoryiesFieldHeader(): string {
    if (this.selectedComponent === null) {
      return 'Choose components';
    }
    return this.selectedComponent;
  }
}
