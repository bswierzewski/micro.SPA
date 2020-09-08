import { Component, OnInit, OnDestroy } from '@angular/core';
import { KindInformationService } from 'src/app/modules/_services/device-information/kind-information.service';
import { AdminDeviceInformationService } from '../admin-device-information/admin-device-information.service';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Kind } from 'src/app/modules/models/device-information/Kind';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-admin-device-information-kind',
  templateUrl: './admin-device-information-kind.component.html',
  styleUrls: ['./admin-device-information-kind.component.scss'],
})
export class AdminDeviceInformationKindComponent implements OnInit, OnDestroy {
  isAlive = true;
  kinds$: Observable<Kind[]>;
  selectedItem: any = null;
  constructor(
    private kindInformationService: KindInformationService,
    private adminDeviceInformationService: AdminDeviceInformationService<Kind>
  ) {
    this.kinds$ = kindInformationService.getKinds();
    adminDeviceInformationService.dataSource$ = kindInformationService.getKinds();
  }

  ngOnInit(): void {
    this.adminDeviceInformationService.selectionChangeSubject$
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((data) => {
        this.selectionChange(data);
      });

    this.adminDeviceInformationService.removeSubject$
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((data) => {
        this.removeClick(data);
      });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  // Method to subscribe subject
  removeClick(data: Kind): void {
    console.log(data);
  }

  selectionChange(data: Kind): void {
    console.log(data);
  }

  // Click event
  onClearClick(): void {
    this.adminDeviceInformationService.clearSubject$.next();
  }

  onResetClick(form: NgForm): void {
    console.log(form.value);
  }

  onSubmitClick(form: NgForm): void {
    console.log(form.value);
  }
}
