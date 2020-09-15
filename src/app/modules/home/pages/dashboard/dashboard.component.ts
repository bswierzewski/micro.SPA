import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeviceListComponent } from './components/dialog-device-list.component';
import { DeviceDialogDataModel } from './components/DeviceDialogDataModel';
import { Device } from 'src/app/modules/models/Device';
import { DeviceService } from 'src/app/modules/_services/device.service';
import { SocketService } from 'src/app/modules/_services/socket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'time', 'macAddress', 'rssi'];

  devices: Device[];

  selectedDevices: Device[] = [];

  constructor(
    public dialog: MatDialog,
    private deviceService: DeviceService,
    private socketService: SocketService
  ) {
    deviceService.getDevices().subscribe((data) => {
      this.devices = data;
    });

    socketService.connectSocket();

    socketService.getMessages().subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {}

  remove(device: Device): void {
    if (device) {
      this.selectedDevices = this.selectedDevices.filter(
        (x) => x.id !== device.id
      );
      this.socketService.unsubscribe(device.name);
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

    dialogRef.afterClosed().subscribe((result: Device[]) => {
      if (result) {
        this.selectedDevices = result;
        this.selectedDevices.forEach((device) => {
          this.socketService.subscribe(device.name);
        });
      }
    });
  }
}
