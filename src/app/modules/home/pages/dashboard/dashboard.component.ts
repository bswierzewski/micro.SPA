import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeviceListComponent } from './components/dialog-device-list.component';
import { DialogDataModel } from './components/DialogDataModel';

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
  devicesChips: string[];
  animal: string;
  name: string;

  data: DialogDataModel = {
    devices: [
      { name: 'Jeden', isSubscribe: false },
      { name: 'Dwa', isSubscribe: true },
      { name: 'Trzy', isSubscribe: true },
      { name: 'Cztery', isSubscribe: false },
      { name: 'Pięć', isSubscribe: true },
      { name: 'Sześć', isSubscribe: true },
      { name: 'Siedem', isSubscribe: true },
    ],
  };

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.refreshChips();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDeviceListComponent, {
      data: this.data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        this.data = result;
        this.refreshChips();
      }
    });
  }

  remove(devicesChips: string): void {
    const index = this.data.devices.findIndex((x) => x.name === devicesChips);

    if (index >= 0) {
      this.data.devices[index].isSubscribe = false;
      this.refreshChips();
    }
  }

  refreshChips(): void {
    this.devicesChips = this.data.devices
      .filter((x) => x.isSubscribe === true)
      .map<string>((x) => x.name);
  }
}
