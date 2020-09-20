import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TabListFormService } from 'src/app/shared/components/tab-list-form';
import { DeviceComponent, Category } from 'src/app/shared/models';
import { DeviceComponentInformationService, CategoryInformationService, AlertService } from 'src/app/core/_services';
import { takeWhile } from 'rxjs/operators';

export class Model {
  id = 0;
  name = '';
  icon = '';
  categoryId: number[] = [];
  isExpanded = false;
}

@Component({
  selector: 'app-admin-device-information-component',
  templateUrl: './admin-device-information-component.component.html',
  styleUrls: ['./admin-device-information-component.component.scss'],
})
export class AdminDeviceInformationComponentComponent implements OnInit, OnDestroy {
  isAlive = true;
  model = new Model();

  categories: Category[];

  constructor(
    private categoriesInformationService: CategoryInformationService,
    private deviceComponentInformationService: DeviceComponentInformationService,
    private tabListFormService: TabListFormService<DeviceComponent>,
    private alertService: AlertService
  ) {
    this.loadComponents();
    categoriesInformationService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        this.alertService.error(error.message);
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
  removeClick(data: DeviceComponent): void {
    this.alertService.confirm('Are you sure?', () => {
      this.deviceComponentInformationService.removeDeviceComponent(data.id).subscribe(
        (next) => {
          this.tabListFormService.dataSource = this.tabListFormService.dataSource.filter((x) => x.id !== data.id);
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    });
  }

  selectionChange(data: DeviceComponent[]): void {
    if (data[0].name) {
      this.model.id = data[0].id;
      this.model.name = data[0].name;
      this.model.icon = data[0].icon;
      this.model.categoryId = [data[0].categoryId];
    }
  }

  loadComponents(): void {
    this.deviceComponentInformationService.getDeviceComponents().subscribe(
      (data) => {
        this.tabListFormService.dataSource = data;
      },
      (error) => {
        this.alertService.error(error.message);
      }
    );
  }

  // Click event
  onClearClick(form: NgForm): void {
    this.tabListFormService.clearSubject$.next();
    form.resetForm();
    this.model = new Model();
  }

  onSubmitClick(form: NgForm): void {
    if (form.valid) {
      const deviceComponent = {
        id: this.model.id,
        name: this.model.name,
        icon: this.model.icon,
        categoryId: this.model?.categoryId[0],
      } as DeviceComponent;

      this.deviceComponentInformationService.addDeviceComponent(deviceComponent).subscribe(
        (next) => {
          if (this.model.id === 0) {
            this.tabListFormService.dataSource.push(next);
          } else {
            this.alertService.success('Components updated!');
          }
          this.onClearClick(form);
          this.loadComponents();
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    }
  }

  // Local helper method
  getCategoryiesFieldHeader(): string {
    if (!this.model?.categoryId[0] || this.model.categoryId[0] === undefined) {
      return 'Choose category';
    }
    return this.categories[this.model.categoryId[0] - 1].name;
  }
}
