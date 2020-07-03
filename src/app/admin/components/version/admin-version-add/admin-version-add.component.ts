import { Component, OnInit } from '@angular/core';
import { UpdateDeviceService } from 'src/app/_services/updateDevice.service';
import { NgForm } from '@angular/forms';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-admin-version-add',
  templateUrl: './admin-version-add.component.html',
  styleUrls: ['./admin-version-add.component.css'],
})
export class AdminVersionAddComponent implements OnInit {
  fileToUpload: File = null;

  constructor(
    private updateDeviceService: UpdateDeviceService,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {}

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
        this.fileToUpload
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
