import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  columns = [
    { columnDef: 'position', header: '#', cell: (element: any) => `${element.position}` },
    { columnDef: 'name', header: 'Name', cell: (element: any) => `${element.name}` },
    { columnDef: 'weight', header: 'MacAddress', cell: (element: any) => `${element.weight}` },
  ];

  displayedColumnsRegistration = [...this.columns.map(c => c.columnDef)];
  dataSource = ELEMENT_DATA;
}



const ELEMENT_DATA: any = of([
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', subscribe: false },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', subscribe: false },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', subscribe: false },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', subscribe: false },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', subscribe: false },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', subscribe: false },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', subscribe: false },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', subscribe: false },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', subscribe: false },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', subscribe: false },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', subscribe: false },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', subscribe: false },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', subscribe: false },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', subscribe: false },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', subscribe: false },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', subscribe: false },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', subscribe: false },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', subscribe: false },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', subscribe: false },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', subscribe: false },
]);


