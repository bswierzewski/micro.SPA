import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories = [
    { Id: 1, Name: 'Sensor' },
    { Id: 2, Name: 'Output' },
    { Id: 3, Name: 'Light' },
    { Id: 4, Name: 'Switch' },
    { Id: 5, Name: 'Fan' },
    { Id: 6, Name: 'Display' },
    { Id: 7, Name: 'Misc' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
