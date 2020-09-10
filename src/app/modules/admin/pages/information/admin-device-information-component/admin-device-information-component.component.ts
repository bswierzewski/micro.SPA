import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryInformationService } from 'src/app/modules/_services/device-information/category-information.service';
import { DeviceComponentInformationService } from 'src/app/modules/_services/device-information/device-component-information.service';
import { AdminDeviceInformationService } from '../admin-device-information/admin-device-information.service';
import { DeviceComponent } from 'src/app/modules/models/device-information/DeviceComponent';
import { takeWhile } from 'rxjs/operators';
import { Category } from 'src/app/modules/models/device-information/Category';
import { AlertService } from 'src/app/modules/_services/alert.service';

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
    private adminDeviceInformationService: AdminDeviceInformationService<
      DeviceComponent
    >,
    private alertService: AlertService
  ) {
    deviceComponentInformationService.getDeviceComponents().subscribe(
      (data) => {
        this.adminDeviceInformationService.dataSource = data;
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
  removeClick(data: DeviceComponent): void {
    this.alertService.confirm('Are you sure?', () => {
      this.deviceComponentInformationService
        .removeDeviceComponent(data.id)
        .subscribe();
      this.adminDeviceInformationService.dataSource = this.adminDeviceInformationService.dataSource.filter(
        (x) => x.id !== data.id
      );
    });
  }

  selectionChange(data: DeviceComponent): void {}

  // Click event
  onClearClick(): void {
    this.adminDeviceInformationService.clearSubject$.next();
  }

  onResetClick(form: NgForm): void {
    form.resetForm();
  }

  onSubmitClick(form: NgForm): void {
    if (form.valid) {
      const newComponent: DeviceComponent = {
        id: 11,
        name: form.value.name,
        iconName: form.value.icon,
        categoryId: form.value.category[0]?.id,
      };

      this.deviceComponentInformationService
        .addDeviceComponent(newComponent)
        .subscribe(
          (next) => {
            this.adminDeviceInformationService.dataSource.push(next);
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
