import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  checkboxes: [
    { name: 'Jeden'; checked: true },
    { name: 'Dwa'; checked: true },
    { name: 'Trzy'; checked: true },
    { name: 'Cztery'; checked: false },
    { name: 'Pięć'; checked: true },
    { name: 'Sześć'; checked: true },
    { name: 'Siedem'; checked: true }
  ];
  name: string;
}

@Component({
  selector: 'app-dialog-device-list',
  templateUrl: './dialog-device-list.component.html',
  styleUrls: ['./dialog-device-list.component.scss'],
})
export class DialogDeviceListComponent {
  name: string;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  constructor(
    public dialogRef: MatDialogRef<DialogDeviceListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  onOkClick(): void {
    this.dialogRef.close(this.data);
  }
}
