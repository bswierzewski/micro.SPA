import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
})
export class ComponentsComponent implements OnInit {
  components = [
    { Id: 1, Name: 'HX71', CategoryId: 1 },
    { Id: 2, Name: 'Hall', CategoryId: 1 },
    { Id: 3, Name: 'HTU21D', CategoryId: 1 },
    { Id: 4, Name: 'GPIO', CategoryId: 2 },
    { Id: 5, Name: 'PCA9685', CategoryId: 2 },
    { Id: 6, Name: 'RGB', CategoryId: 3 },
    { Id: 7, Name: 'RGBW', CategoryId: 3 },
    { Id: 8, Name: 'UART', CategoryId: 4 },
    { Id: 9, Name: 'GPIO', CategoryId: 4 },
    { Id: 10, Name: 'Speed', CategoryId: 5 },
    { Id: 11, Name: 'Binary', CategoryId: 5 },
    { Id: 12, Name: 'LCD', CategoryId: 6 },
    { Id: 13, Name: 'MAX7219', CategoryId: 6 },
    { Id: 14, Name: 'BLE Tracker', CategoryId: 7 },
    { Id: 15, Name: 'BLE Beacon', CategoryId: 7 },
    { Id: 16, Name: 'Servo', CategoryId: 7 },
    { Id: 17, Name: 'GPS', CategoryId: 7 },
    { Id: 18, Name: 'SUN', CategoryId: 7 },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.components = this.components.filter(x=> x.CategoryId == params.id);
    });
  }
}