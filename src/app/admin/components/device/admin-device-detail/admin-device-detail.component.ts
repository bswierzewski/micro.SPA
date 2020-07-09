import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from 'src/app/_models/Device';
import { DeviceService } from 'src/app/_services/device.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { VersionService } from 'src/app/_services/version.service';
import { VersionInfo } from 'src/app/_models/VersionInfo';
import { SetVersion } from 'src/app/_models/SetVersion';

@Component({
  selector: 'app-admin-device-detail',
  templateUrl: './admin-device-detail.component.html',
  styleUrls: ['./admin-device-detail.component.css']
})
export class AdminDeviceDetailComponent implements OnInit {

  device: Device;
  versions: VersionInfo[] = [];

  constructor(private route: ActivatedRoute,
    private deviceService: DeviceService,
    private versionService: VersionService,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.deviceService.getDevice(params.id).subscribe(
        data => {
          this.device = data;
        },
        error => {
          this.alertify.error(error);
        }
      )
    });

    this.versionService.getAllVersions().subscribe(
      data => {
        this.versions = data;
      }
    );
  }

  setDevice(versionId: number): void {
    const version: SetVersion = {
      deviceId: this.device.id,
      versionId: Number(versionId),
    };

    console.log(version);

    this.versionService.setVesion(version).subscribe(
      () => {
        this.alertify.success('Ustawiono wersję!');
      }, error => {
        this.alertify.error(error);
      }
    );
  }

}
