import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeviceListComponent } from './components/dialog-device-list.component';
import { DeviceDialogDataModel } from './components/DeviceDialogDataModel';
import { Device } from 'src/app/modules/models/Device';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  devices: Device[] = [
    { id: 1, name: 'Jeden' },
    { id: 2, name: 'Dwa' },
    { id: 3, name: 'Trzy' },
  ];

  selectedDevices: Device[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  remove(device: Device): void {
    if (device) {
      this.selectedDevices = this.selectedDevices.filter(
        (x) => x.id !== device.id
      );
    }
  }

  // Dialog with filter devices
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDeviceListComponent, {
      data: {
        devices: this.devices,
        selectedDevices: this.selectedDevices,
      } as DeviceDialogDataModel,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.selectedDevices = result;
      }
    });
  }
}
