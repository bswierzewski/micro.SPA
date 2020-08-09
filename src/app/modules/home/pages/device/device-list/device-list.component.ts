import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  kinds = new FormControl();
  categories = new FormControl();
  components = new FormControl();

  kindsList: string[] = ['ESP32', 'ITAG'];
  categoriesList: string[] = ['Light', 'Display'];
  componentsList: string[] = ['HALL', 'HXL75'];

  constructor() {}

  ngOnInit(): void {}

  cardClick(item: any): void {
    console.log(item);
  }
}
