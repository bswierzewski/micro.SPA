import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { DeviceService } from 'src/app/_services/device.service';
import { DeviceKind } from 'src/app/_models/DeviceKind';
import { DeviceType } from 'src/app/_models/DeviceType';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { AddDevice } from 'src/app/_models/AddDevice';

@Component({
  selector: 'app-admin-device-add',
  templateUrl: './admin-device-add.component.html',
  styleUrls: ['./admin-device-add.component.css']
})
export class AdminDeviceAddComponent implements OnInit {

  types: DeviceType[] = [];
  kinds: DeviceKind[] = [];
  constructor(
    private alertify: AlertifyService,
    private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.loadDeviceKind();

    this.loadDeviceType();
  }

  addDevice(form: NgForm) {
    const device: AddDevice = {
      macAddress: form.value.macAddress,
      name: form.value.name,
      deviceKindId: form.value.kindId,
      deviceTypeId: form.value.typeId,
    };

    console.log(device);

    this.deviceService.addDevice(device).subscribe(
      () => {
        form.resetForm();
        this.alertify.success('Dodano nowe urządzenie!');
      }, error => {
        this.alertify.error(error);
      });
  }

  addType(form: NgForm) {
    const deviceType: DeviceType = {
      type: form.value.type
    };

    this.deviceService.addType(deviceType).subscribe(
      () => {
        form.resetForm();
        this.loadDeviceType();
        this.alertify.success('Dodano nowy typ!');
      }, error => {
        this.alertify.error(error);
      });
  }

  addKind(form: NgForm) {
    const deviceKind: DeviceKind = {
      kind: form.value.kind
    };
    this.deviceService.addKind(deviceKind).subscribe(
      () => {
        form.resetForm();
        this.loadDeviceKind();
        this.alertify.success('Dodano nowy rodzaj!');
      }, error => {
        this.alertify.error(error);
      });
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
