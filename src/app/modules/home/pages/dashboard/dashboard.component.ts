import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeviceListComponent } from './components/dialog-device-list.component';
import { DeviceDialogDataModel } from './components/DeviceDialogDataModel';
import { Device } from 'src/app/modules/models/Device';
import { Observable } from 'rxjs';
import { map, toArray } from 'rxjs/operators';
import { DeviceService } from 'src/app/modules/_services/device.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  devices: Device[];

  selectedDevices: Device[] = [];

  constructor(public dialog: MatDialog, private deviceService: DeviceService) {
    deviceService.getDevices().subscribe((data) => {
      this.devices = data;
    });
  }

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
