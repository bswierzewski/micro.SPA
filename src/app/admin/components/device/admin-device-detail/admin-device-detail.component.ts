import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from 'src/app/_models/Device';
import { DeviceService } from 'src/app/_services/device.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-admin-device-detail',
  templateUrl: './admin-device-detail.component.html',
  styleUrls: ['./admin-device-detail.component.css']
})
export class AdminDeviceDetailComponent implements OnInit {
  
  device: Device;

  constructor(private route: ActivatedRoute, private deviceService: DeviceService, private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.deviceService.getDevice(params['id']).subscribe(
        data => {
          this.device = data;
        },
        error => {
          this.alertify.error(error);
        }
      )
    })
  }

}
