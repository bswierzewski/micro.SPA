import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDataModel } from './DialogDataModel';

@Component({
  selector: 'app-dialog-device-list',
  templateUrl: './dialog-device-list.component.html',
  styleUrls: ['./dialog-device-list.component.scss'],
})
export class DialogDeviceListComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDeviceListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataModel
  ) {}

  OkClick(): void {
    this.dialogRef.close(this.data);
  }

  ClearClick(): void {
    this.data.devices.forEach((device) => {
      device.isSubscribe = false;
    });
  }
}
