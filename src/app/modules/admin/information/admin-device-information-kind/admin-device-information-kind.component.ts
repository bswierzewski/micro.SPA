import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { TabListFormService } from 'src/app/shared/components/tab-list-form';
import { Kind } from 'src/app/shared/models';
import { KindInformationService, AlertService } from 'src/app/core/_services';
import { NgForm } from '@angular/forms';

export class Model {
  id = 0;
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
  model = new Model();

  constructor(
    private kindInformationService: KindInformationService,
    private tabListFormService: TabListFormService<Kind>,
    private alertService: AlertService
  ) {
    this.loadKinds();
  }

  ngOnInit(): void {
    this.selectionChangeSubscribe();
    this.removeSubscribe();
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  selectionChangeSubscribe(): void {
    this.tabListFormService.selectionChangeSubject$.pipe(takeWhile(() => this.isAlive)).subscribe((value: Kind) => {
      if (value.name) {
        this.model.id = value.id;
        this.model.icon = value.icon;
        this.model.name = value.name;
      }
    });
  }

  loadKinds(): void {
    this.tabListFormService.dataSource$ = this.kindInformationService.getKinds();
  }

  // Method to subscribe subject
  removeSubscribe(): void {
    this.tabListFormService.removeSubject$.pipe(takeWhile(() => this.isAlive)).subscribe((data) => {
      this.alertService.confirm('Are you sure?', () => {
        this.kindInformationService.removeKind(data.id).subscribe(
          (next) => {
            this.onClearClick();
            this.loadKinds();
          },
          (error) => {
            this.alertService.error(error);
          }
        );
      });
    });
  }

  // Click event
  onClearClick(): void {
    this.tabListFormService.clearSubject$.next();
    this.model = new Model();
  }

  onSubmitClick(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    if (this.model.name && this.model.icon) {
      const kind = {
        id: this.model.id,
        name: this.model.name,
        icon: this.model.icon,
      } as Kind;

      if (kind.id === 0) {
        this.kindInformationService.addKind(kind).subscribe(
          (next) => {
            this.alertService.success('Kind added!');
            form.resetForm();
            this.onClearClick();
            this.loadKinds();
          },
          (error) => {
            this.alertService.error(error);
          }
        );
      } else {
        this.kindInformationService.updateKind(kind).subscribe(
          (next) => {
            this.alertService.success('Kind updated!');
            form.resetForm();
            this.onClearClick();
            this.loadKinds();
          },
          (error) => {
            this.alertService.error(error);
          }
        );
      }
    }
  }
}
