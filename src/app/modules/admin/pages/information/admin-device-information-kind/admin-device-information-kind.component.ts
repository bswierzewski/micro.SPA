import { Component, OnInit, OnDestroy } from '@angular/core';
import { KindInformationService } from 'src/app/modules/_services/device-information/kind-information.service';
import { AdminDeviceInformationService } from '../admin-device-information/admin-device-information.service';
import { NgForm } from '@angular/forms';
import { Kind } from 'src/app/modules/models/device-information/Kind';
import { takeWhile } from 'rxjs/operators';
import { AlertifyService } from 'src/app/modules/_services/alertifyjs.service';

@Component({
  selector: 'app-admin-device-information-kind',
  templateUrl: './admin-device-information-kind.component.html',
  styleUrls: ['./admin-device-information-kind.component.scss'],
})
export class AdminDeviceInformationKindComponent implements OnInit, OnDestroy {
  isAlive = true;
  selectedItem: any;
  constructor(
    private kindInformationService: KindInformationService,
    private adminDeviceInformationService: AdminDeviceInformationService<Kind>,
    private alertify: AlertifyService
  ) {
    kindInformationService.getKinds().subscribe((data) => {
      adminDeviceInformationService.dataSource = data;
    });
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
    this.alertify.confirm('Really?', () => {
      console.log(data);
    });
  }

  selectionChange(data: Kind): void {
    console.log(data);
  }

  // Click event
  onClearClick(): void {
    this.adminDeviceInformationService.clearSubject$.next();
  }

  onResetClick(form: NgForm): void {
    this.alertify.confirm('Really?', () => {
      console.log(form.value);
    });
  }

  onSubmitClick(form: NgForm): void {
    console.log(form.value);
  }
}
