import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = [
    { name: 'one', id: 1 },
    { name: 'two', id: 2 },
    { name: 'three', id: 3 },
    { name: 'four', id: 4 },
    { name: 'five', id: 5 },
    { name: 'six', id: 6 },
    { name: 'seven', id: 7 },
    { name: 'eight', id: 8 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
