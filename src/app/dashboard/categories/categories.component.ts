import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories = [
    { Id: 1, Name: 'Sensor', FontAwesome: 'fas fa-signal' },
    { Id: 2, Name: 'Output', FontAwesome: 'fas fa-sign-out-alt' },
    { Id: 3, Name: 'Light', FontAwesome: 'fas fa-lightbulb' },
    { Id: 4, Name: 'Switch', FontAwesome: 'fas fa-random' },
    { Id: 5, Name: 'Fan', FontAwesome: 'fas fa-fan' },
    { Id: 6, Name: 'Display', FontAwesome: 'fas fa-desktop' },
    { Id: 7, Name: 'Misc', FontAwesome: 'fas fa-globe' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
