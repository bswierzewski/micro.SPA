import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeviceForList } from 'src/app/shared/models';
import { DeviceDialogDataModel } from './DeviceDialogDataModel';

@Component({
  selector: 'app-dialog-device-list',
  templateUrl: './dialog-device-list.component.html',
  styleUrls: ['./dialog-device-list.component.scss'],
})
export class DialogDeviceListComponent {
  selectedDevices: DeviceForList[];

  constructor(
    public dialogRef: MatDialogRef<DialogDeviceListComponent>,
    @Inject(MAT_DIALOG_DATA) public deviceDialogDataModel: DeviceDialogDataModel
  ) {
    this.selectedDevices = deviceDialogDataModel.selectedDevices;
  }

  onFilterClick(): void {
    this.dialogRef.close(this.selectedDevices);
  }

  onClearClick(): void {
    this.dialogRef.close([]);
  }
}
