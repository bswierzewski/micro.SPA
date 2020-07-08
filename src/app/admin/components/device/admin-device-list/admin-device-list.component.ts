import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/_models/Device';
import { DeviceService } from 'src/app/_services/device.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-admin-device-list',
  templateUrl: './admin-device-list.component.html',
  styleUrls: ['./admin-device-list.component.css']
})
export class AdminDeviceListComponent implements OnInit {

  devices: Device[] = [];

  constructor(private router: Router, private deviceService: DeviceService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.deviceService.getTypes().subscribe(
      data => {
        console.log(data);
      },
      error => {
        this.alertify.error(error);
      }
    )
  }

}
