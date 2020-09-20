import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';
import { TabListFormService } from 'src/app/shared/components/tab-list-form';
import { Kind } from 'src/app/shared/models';
import { KindInformationService, AlertService } from 'src/app/core/_services';

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
    kindInformationService.getKinds().subscribe(
      (data) => {
        tabListFormService.dataSource = data;
      },
      (error) => {
        alertService.error(error.message);
      }
    );
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
      this.kindInformationService.removeKind(data.id).subscribe(
        (next) => {
          this.tabListFormService.dataSource = this.tabListFormService.dataSource.filter((x) => x.id !== data.id);
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    });
  }

  selectionChange(data: Kind[]): void {
    if (data[0].name) {
      this.model.id = data[0].id;
      this.model.icon = data[0].icon;
      this.model.name = data[0].name;
    }
  }

  // Click event
  onClearClick(): void {
    this.tabListFormService.clearSubject$.next();
    this.model = new Model();
  }

  onSubmitClick(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    if (this.model.name && this.model.icon) {
      const kind = {
        id: this.model.id,
        name: this.model.name,
        icon: this.model.icon,
      } as Kind;

      this.kindInformationService.addKind(kind).subscribe(
        (next) => {
          if (kind.id === 0) {
            this.tabListFormService.dataSource.push(next);
          } else {
            this.alertService.success('Kind updated!');
          }
          form.resetForm();
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    }
  }
}
