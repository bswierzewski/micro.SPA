import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from 'src/app/_models/Device';
import { DeviceService } from 'src/app/_services/device.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { VersionService } from 'src/app/_services/version.service';
import { VersionInfo } from 'src/app/_models/VersionInfo';
import { DeviceType } from 'src/app/_models/DeviceType';
import { DeviceKind } from 'src/app/_models/DeviceKind';
import { NgForm } from '@angular/forms';
import { UpdateDevice } from 'src/app/_models/UpdateDevice';

@Component({
  selector: 'app-admin-device-detail',
  templateUrl: './admin-device-detail.component.html',
  styleUrls: ['./admin-device-detail.component.css']
})
export class AdminDeviceDetailComponent implements OnInit {

  device: Device;
  versions: VersionInfo[] = [];
  types: DeviceType[] = [];
  kinds: DeviceKind[] = [];

  data = {
    autoUpdate: false,
    version: null,
  }

  constructor(private route: ActivatedRoute,
    private deviceService: DeviceService,
    private versionService: VersionService,
    private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadDevice(params.id);
    });

    this.versionService.getAllVersions().subscribe(
      data => {
        this.versions = data;
      }
    );

    this.loadDeviceType();

    this.loadDeviceKind();
  }

  changeAutoUpdate(isAutoUpdate: boolean) {
    this.data.autoUpdate = isAutoUpdate;
    if (isAutoUpdate) {
      this.data.version = null;
    }
  }

  update(form: NgForm) {

    const data = form.value;

    const updateDevice: UpdateDevice = {
      deviceId: this.device.id,
      kindId: Number(data.kindId),
      typeId: Number(data.typeId),
      name: data.name,
      isAutoUpdate: false,
      versionId: Number(data.versionId)
    };
  }

  loadDevice(id: number) {
    this.deviceService.getDevice(id).subscribe(
      data => {
        this.device = data;
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  private loadDeviceType() {
    this.deviceService.getTypes().subscribe(data => {
      this.types = data;
    }, error => {
      this.alertify.error(error);
    });
  }

  private loadDeviceKind() {
    this.deviceService.getKinds().subscribe(data => {
      this.kinds = data;
    }, error => {
      this.alertify.error(error);
    });
  }

}
