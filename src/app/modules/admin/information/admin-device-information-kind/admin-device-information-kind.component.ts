import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';
import { AdminDeviceInformationService } from 'src/app/shared/components/admin-device-information';
import { Kind } from 'src/app/shared/models';
import { KindInformationService, AlertService } from 'src/app/core/_services';

@Component({
  selector: 'app-admin-device-information-kind',
  templateUrl: './admin-device-information-kind.component.html',
  styleUrls: ['./admin-device-information-kind.component.scss'],
})
export class AdminDeviceInformationKindComponent implements OnInit, OnDestroy {
  isAlive = true;
  kindName: any;
  constructor(
    private kindInformationService: KindInformationService,
    private adminDeviceInformationService: AdminDeviceInformationService<Kind>,
    private alertService: AlertService
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
    this.alertService.confirm('Are you sure?', () => {
      this.kindInformationService.removeKind(data.id).subscribe();
      this.adminDeviceInformationService.dataSource = this.adminDeviceInformationService.dataSource.filter(
        (x) => x.id !== data.id
      );
    });
  }

  selectionChange(data: Kind): void {
    this.kindName = data[0].name;
  }

  // Click event
  onClearClick(): void {
    this.adminDeviceInformationService.clearSubject$.next();
  }

  onResetClick(form: NgForm): void {
    form.resetForm();
  }

  onSubmitClick(form: NgForm): void {
    if (form.valid) {
      const newKind: Kind = {
        id:
          Math.max(
            ...this.adminDeviceInformationService.dataSource.map((o) => o.id)
          ) + 1,
        name: form.value.name,
        created: new Date(),
        photoUrl: '',
      };

      this.kindInformationService.addKind(newKind).subscribe(
        (next) => {
          this.adminDeviceInformationService.dataSource.push(next);
          form.resetForm();
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    }
  }
}
