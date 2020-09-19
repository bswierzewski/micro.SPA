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
  selector: 'app-admin-device-information-component',
  templateUrl: './admin-device-information-component.component.html',
  styleUrls: ['./admin-device-information-component.component.scss'],
})
export class AdminDeviceInformationComponentComponent
  implements OnInit, OnDestroy {
  isAlive = true;
  panelOpenState: any;

  categories: Category[];
  components: DeviceComponent[];
  selectedCategory: Category = null;
  selectedComponent: any = null;

  constructor(
    private categoriesInformationService: CategoryInformationService,
    private deviceComponentInformationService: DeviceComponentInformationService,
    private tabListFormService: TabListFormService<DeviceComponent>,
    private alertService: AlertService
  ) {
    deviceComponentInformationService.getDeviceComponents().subscribe(
      (data) => {
        this.tabListFormService.dataSource = data;
      },
      (error) => {
        alertService.error(error);
      }
    );

    categoriesInformationService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        alertService.error(error);
      }
    );
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
  removeClick(data: DeviceComponent): void {
    this.alertService.confirm('Are you sure?', () => {
      this.deviceComponentInformationService
        .removeDeviceComponent(data.id)
        .subscribe();
      this.tabListFormService.dataSource = this.tabListFormService.dataSource.filter(
        (x) => x.id !== data.id
      );
    });
  }

  selectionChange(data: DeviceComponent): void {}

  // Click event
  onClearClick(): void {
    this.tabListFormService.clearSubject$.next();
  }

  onResetClick(form: NgForm): void {
    form.resetForm();
  }

  onSubmitClick(form: NgForm): void {
    if (form.valid) {
      const newComponent: DeviceComponent = {
        id: 11,
        name: form.value.name,
        icon: form.value.icon,
        categoryId: form.value.category[0]?.id,
      };

      this.deviceComponentInformationService
        .addDeviceComponent(newComponent)
        .subscribe(
          (next) => {
            this.tabListFormService.dataSource.push(next);
          },
          (error) => {
            this.alertService.error(error);
          }
        );
    }
  }

  // Local helper method
  getCategoryiesFieldHeader(): string {
    if (this.selectedCategory === null) {
      return 'Choose category';
    }
    return this.selectedCategory[0].name;
  }
}
