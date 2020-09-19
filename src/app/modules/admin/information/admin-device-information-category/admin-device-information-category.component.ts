import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';
import { TabListFormService } from 'src/app/shared/components/tab-list-form';
import { DeviceComponent, Category } from 'src/app/shared/models';
import {
  DeviceComponentInformationService,
  CategoryInformationService,
  AlertService,
} from 'src/app/core/_services';

@Component({
  selector: 'app-admin-device-information-category',
  templateUrl: './admin-device-information-category.component.html',
  styleUrls: ['./admin-device-information-category.component.scss'],
})
export class AdminDeviceInformationCategoryComponent
  implements OnInit, OnDestroy {
  isAlive = true;
  panelOpenState: any;

  components: DeviceComponent[];
  selectedComponents: DeviceComponent[] = [];
  selectedCategory: any = null;

  constructor(
    private categoriesInformationService: CategoryInformationService,
    private deviceComponentInformationService: DeviceComponentInformationService,
    private tabListFormService: TabListFormService<Category>,
    private alertService: AlertService
  ) {
    this.categoriesInformationService.getCategories().subscribe(
      (data) => {
        this.tabListFormService.dataSource = data;
      },
      (error) => {
        alertService.error(error);
      }
    );
    this.deviceComponentInformationService
      .getDeviceComponents()
      .subscribe((data) => {
        this.components = data;
      });
  }

  ngOnInit(): void {
    this.tabListFormService.selectionChangeSubject$
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((data) => {
        this.selectionChange(data);
      });

    this.tabListFormService.removeSubject$
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((data) => {
        this.removeClick(data);
      });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  // Method to subscribe subject
  removeClick(data: Category): void {
    this.alertService.confirm('Are you sure?', () => {
      this.categoriesInformationService.removeCategory(data.id).subscribe();
      this.tabListFormService.dataSource = this.tabListFormService.dataSource.filter(
        (x) => x.id !== data.id
      );
    });
  }

  selectionChange(data: Category): void {
    console.log(data);
  }

  // Click event
  onClearClick(): void {
    this.tabListFormService.clearSubject$.next();
  }

  onResetClick(form: NgForm): void {
    console.log(form.value);
  }

  onSubmitClick(form: NgForm): void {
    if (form.valid) {
      const newCategory: Category = {
        id: 11,
        name: form.value.name,
        icon: form.value.icon,
        deviceComponentIds: form.value.components.map((x) => x.id),
      };

      this.categoriesInformationService.addCategory(newCategory).subscribe(
        (next) => {
          this.tabListFormService.dataSource.push(next);
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    }
  }

  getComponentsFieldHeader(): string {
    if (
      this.selectedComponents == null ||
      this.selectedComponents?.length === 0
    ) {
      return 'Choose components';
    }

    if (this.selectedComponents?.length === 1) {
      return this.selectedComponents[0]?.name;
    }

    return `${this.selectedComponents[0]?.name} (+${
      this.selectedComponents?.length - 1
    } other)`;
  }
}
