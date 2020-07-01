import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/_services/device.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  devices = [
    { name: 'one', id: 1 },
    { name: 'two', id: 2 },
    { name: 'three', id: 3 },
    { name: 'four', id: 4 },
    { name: 'five', id: 5 },
    { name: 'six', id: 6 },
    { name: 'seven', id: 7 },
    { name: 'eight', id: 8 },
  ];

  constructor(private router: Router) { }

  ngOnInit() { }
}

