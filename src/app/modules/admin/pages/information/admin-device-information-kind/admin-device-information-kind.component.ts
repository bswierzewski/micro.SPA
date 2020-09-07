import { Component, OnInit } from '@angular/core';
import { KindInformationService } from 'src/app/modules/_services/device-information/kind-information.service';
import { AdminDeviceInformationService } from '../admin-device-information/admin-device-information.service';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Kind } from 'src/app/modules/models/device-information/Kind';

@Component({
  selector: 'app-admin-device-information-kind',
  templateUrl: './admin-device-information-kind.component.html',
  styleUrls: ['./admin-device-information-kind.component.scss'],
})
export class AdminDeviceInformationKindComponent implements OnInit {
  kinds$: Observable<string[]>;
  selectedItem: any = null;
  constructor(
    private kindInformationService: KindInformationService,
    private adminDeviceInformationService: AdminDeviceInformationService<Kind>
  ) {
    adminDeviceInformationService.dataSource$ = of([
      { id: 3, name: '3', cos: 1 },
      { id: 4, name: '4', cos: 1 },
    ]);
  }

  ngOnInit(): void {}

  onSelectionChange(): any {
    console.log(this.selectedItem);
  }

  onSubmitClick(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.kindInformationService.addKind(form.value.name);

    form.resetForm();
  }

  onClearClick(): void {
    this.selectedItem = null;
  }

  onResetClick(): void {
    console.log('Reset ' + this.constructor.name);
  }

  onRemoveClick(item: string): void {
    this.kindInformationService.removeKind(item);
  }
}
