import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';
import { TabListFormService } from 'src/app/shared/components/tab-list-form';
import { DeviceComponent, Category } from 'src/app/shared/models';
import { DeviceComponentInformationService, CategoryInformationService, AlertService } from 'src/app/core/_services';
import { Observable } from 'rxjs';

export class Model {
  id = 0;
  name = '';
  icon = '';
  deviceComponentIds: number[] = [];
  isExpanded = false;
}

@Component({
  selector: 'app-admin-device-information-category',
  templateUrl: './admin-device-information-category.component.html',
  styleUrls: ['./admin-device-information-category.component.scss'],
})
export class AdminDeviceInformationCategoryComponent implements OnInit, OnDestroy {
  isAlive = true;
  model = new Model();
  components: DeviceComponent[];

  constructor(
    private categoriesInformationService: CategoryInformationService,
    private deviceComponentInformationService: DeviceComponentInformationService,
    private tabListFormService: TabListFormService<Category>,
    private alertService: AlertService
  ) {
    this.deviceComponentInformationService.getDeviceComponents().subscribe(
      (data) => {
        this.components = data;
      },
      (error) => {
        alertService.error(error.message);
      }
    );

    this.loadCategories();
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

  loadCategories(): void {
    this.tabListFormService.dataSource$ = this.categoriesInformationService.getCategories();
  }

  // Method to subscribe subject
  removeClick(data: Category): void {
    this.alertService.confirm('Are you sure?', () => {
      this.categoriesInformationService.removeCategory(data.id).subscribe(
        (next) => {
          this.loadCategories();
          this.onClearClick();
        },
        (error) => {
          this.alertService.error(error.message);
        }
      );
    });
  }

  selectionChange(data: Category): void {
    if (data.name) {
      this.model.id = data.id;
      this.model.name = data.name;
      this.model.icon = data.icon;
      this.model.deviceComponentIds = data.deviceComponentIds;
    }
  }

  // Click event
  onClearClick(): void {
    this.tabListFormService.clearSubject$.next();
    this.model = new Model();
  }

  onSubmitClick(): void {
    const category = {
      id: this.model.id,
      name: this.model.name,
      icon: this.model.icon,
      deviceComponentIds: this.model.deviceComponentIds,
    } as Category;

    this.categoriesInformationService.addCategory(category).subscribe(
      (next) => {
        if (this.model.id === 0) {
          this.alertService.success('Category updated!');
        }
        this.loadCategories();
        this.onClearClick();
      },
      (error) => {
        this.alertService.error(error.message);
      }
    );
  }

  getComponentsFieldHeader(): string {
    if (!this.model?.deviceComponentIds || this.model.deviceComponentIds.length === 0) {
      return 'Choose components';
    }

    if (this.model?.deviceComponentIds?.length === 1) {
      return this.components.find((x) => x.id === this.model.deviceComponentIds[0])?.name;
    }

    return `${this.components.find((x) => x.id === this.model.deviceComponentIds[0])?.name} (+${
      this.model?.deviceComponentIds?.length - 1
    } other)`;
  }
}
