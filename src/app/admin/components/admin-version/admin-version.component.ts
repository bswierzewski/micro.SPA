import { Component, OnInit } from '@angular/core';
import { UpdateDeviceService } from 'src/app/_services/updateDevice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-version',
  templateUrl: './admin-version.component.html',
  styleUrls: ['./admin-version.component.css'],
})
export class AdminVersionComponent implements OnInit {
  fileToUpload: File = null;

  constructor(private updateDeviceService: UpdateDeviceService) {}

  ngOnInit(): void {}

  clearForm(formVersion: NgForm) {
    formVersion.resetForm();
    this.fileToUpload = null;
  }

  uploadForm(form: NgForm) {
    this.updateDeviceService.uploadVersion(
      form.value.major,
      form.value.minor,
      form.value.patch,
      this.fileToUpload
    );
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
}
