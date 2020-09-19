import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';
import { TabListFormService } from 'src/app/shared/components/tab-list-form';
import { Kind } from 'src/app/shared/models';
import { KindInformationService, AlertService } from 'src/app/core/_services';

export class DataModel {
  name = '';
  icon = '';
}

@Component({
  selector: 'app-admin-device-information-kind',
  templateUrl: './admin-device-information-kind.component.html',
  styleUrls: ['./admin-device-information-kind.component.scss'],
})
export class AdminDeviceInformationKindComponent implements OnInit, OnDestroy {
  isAlive = true;
  data = new DataModel();
  constructor(
    private kindInformationService: KindInformationService,
    private tabListFormService: TabListFormService<Kind>,
    private alertService: AlertService
  ) {
    kindInformationService.getKinds().subscribe((data) => {
      tabListFormService.dataSource = data;
    });
  }

  ngOnInit(): void {
    this.tabListFormService.selectionChangeSubject$.pipe(takeWhile(() => this.isAlive)).subscribe((data) => {
      this.selectionChange(data);
    });

    this.tabListFormService.removeSubject$.pipe(takeWhile(() => this.isAlive)).subscribe((data) => {
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
      this.tabListFormService.dataSource = this.tabListFormService.dataSource.filter((x) => x.id !== data.id);
    });
  }

  selectionChange(data: Kind): void {}

  // Click event
  onClearClick(): void {
    this.tabListFormService.clearSubject$.next();
  }

  onResetClick(form: NgForm): void {
    form.resetForm();
  }

  onSubmitClick(): void {
    console.log(this.data);
    if (this.data.name && this.data.icon) {
      let kind = new Kind();
      kind.name = this.data.name;
      kind.icon = this.data.icon;

      this.kindInformationService.addKind(kind).subscribe(
        (next) => {
          this.tabListFormService.dataSource.push(next);
          this.data = new DataModel();
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    }
  }
}
