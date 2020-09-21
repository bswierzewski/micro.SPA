import { Component, OnInit, OnDestroy } from '@angular/core';
import { TabListFormService } from 'src/app/shared/components/tab-list-form';
import { DeviceComponent, Category } from 'src/app/shared/models';
import { DeviceComponentInformationService, CategoryInformationService, AlertService } from 'src/app/core/_services';
import { takeWhile } from 'rxjs/operators';

export class Model {
  id = 0;
  name = '';
  icon = '';
  isExpanded = false;
  categoryIndex: number[] = [];
}

@Component({
  selector: 'app-admin-device-information-component',
  templateUrl: './admin-device-information-component.component.html',
  styleUrls: ['./admin-device-information-component.component.scss'],
})
export class AdminDeviceInformationComponentComponent implements OnInit, OnDestroy {
  categories: Category[];
  isAlive = true;
  model = new Model();

  constructor(
    private categoriesInformationService: CategoryInformationService,
    private deviceComponentInformationService: DeviceComponentInformationService,
    private tabListFormService: TabListFormService<DeviceComponent>,
    private alertService: AlertService
  ) {
    this.loadComponents();
    this.loadCategories();
  }

  ngOnInit(): void {
    this.selectionChangeSubscribe();
    this.removeSubscribe();
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  expansionPanelTitle(): string {
    if (!this.model.categoryIndex[0] && this.model.categoryIndex[0] !== 0) {
      return 'Choose category';
    } else {
      return this.categories[this.model.categoryIndex[0]].name;
    }
  }

  selectionChangeSubscribe(): void {
    this.tabListFormService.selectionChangeSubject$
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((value: DeviceComponent) => {
        if (value.name) {
          this.model.id = value.id;
          this.model.name = value.name;
          this.model.icon = value.icon;
          this.model.categoryIndex = [this.categories.findIndex((x) => x.id === value.categoryId)];
        }
      });
  }

  // Method to subscribe subject
  removeSubscribe(): void {
    this.tabListFormService.removeSubject$.pipe(takeWhile(() => this.isAlive)).subscribe((data: DeviceComponent) => {
      this.alertService.confirm('Are you sure?', () => {
        this.deviceComponentInformationService.removeDeviceComponent(data.id).subscribe(
          (next) => {
            this.onClearClick();
            this.loadComponents();
          },
          (error) => {
            this.alertService.error(error);
          }
        );
      });
    });
  }

  loadComponents(): void {
    this.tabListFormService.dataSource$ = this.deviceComponentInformationService.getDeviceComponents();
  }

  loadCategories(): void {
    this.categoriesInformationService.getCategories().subscribe((value) => {
      this.categories = value;
    });
  }

  // Click event
  onClearClick(): void {
    this.tabListFormService.clearSubject$.next();
    this.model = new Model();
  }

  onSubmitClick(): void {
    const deviceComponent = {
      id: this.model.id,
      name: this.model.name,
      icon: this.model.icon,
      categoryId: this.categories[this.model.categoryIndex[0]].id,
    } as DeviceComponent;

    this.deviceComponentInformationService.addDeviceComponent(deviceComponent).subscribe(
      (next) => {
        if (this.model.id !== 0) {
          this.alertService.success('Components updated!');
        }
        this.onClearClick();
        this.loadComponents();
      },
      (error) => {
        this.alertService.error(error);
      }
    );
  }
}
