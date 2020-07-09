import { Component, OnInit } from '@angular/core';
import { UpdateDeviceService } from 'src/app/_services/updateDevice.service';
import { NgForm } from '@angular/forms';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { DeviceService } from 'src/app/_services/device.service';
import { DeviceType } from 'src/app/_models/DeviceType';
import { DeviceKind } from 'src/app/_models/DeviceKind';

@Component({
  selector: 'app-admin-version-add',
  templateUrl: './admin-version-add.component.html',
  styleUrls: ['./admin-version-add.component.css'],
})
export class AdminVersionAddComponent implements OnInit {
  fileToUpload: File = null;
  types: DeviceType[] = [];
  kinds: DeviceKind[] = [];
  versionForm = {
    kind: 0,
    type: 0,
  };

  constructor(
    private updateDeviceService: UpdateDeviceService,
    private alertify: AlertifyService,
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.deviceService.getKinds().subscribe(data => {
      this.kinds = data;
      console.log(this.kinds);
    }, error => {
      this.alertify.error(error);
    });

    this.deviceService.getTypes().subscribe(data => {
      this.types = data;
      console.log(this.types);
    }, error => {
      this.alertify.error(error);
    });

    console.log(this.versionForm);
  }

  clearForm(formVersion: NgForm) {
    formVersion.resetForm();
    this.fileToUpload = null;
  }

  uploadForm(form: NgForm) {
    this.updateDeviceService
      .uploadVersion(
        form.value.major,
        form.value.minor,
        form.value.patch,
        form.value.name,
        this.fileToUpload,
        form.value.kind,
        form.value.type,
      )
      .subscribe(
        () => {
          this.alertify.success('Version create successfully');
        },
        (error) => {
          this.alertify.error(error);
          this.clearForm(form);
        },
        () => {
          this.clearForm(form);
        }
      );
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
}
