import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryInformationService } from 'src/app/modules/_services/device-information/category-information.service';
import { DeviceComponentInformationService } from 'src/app/modules/_services/device-information/device-component-information.service';
import { AdminDeviceInformationService } from '../admin-device-information/admin-device-information.service';
import { DeviceComponent } from 'src/app/modules/models/device-information/DeviceComponent';
import { Observable, of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { Category } from 'src/app/modules/models/device-information/Category';

@Component({
  selector: 'app-admin-device-information-component',
  templateUrl: './admin-device-information-component.component.html',
  styleUrls: ['./admin-device-information-component.component.scss'],
})
export class AdminDeviceInformationComponentComponent
  implements OnInit, OnDestroy {
  isAlive = true;
  categories$: Observable<Category[]>;
  components$: Observable<DeviceComponent[]>;
  selectedCategory: any = null;
  selectedComponent: any = null;
  panelOpenState: any;
  constructor(
    private categoriesInformationService: CategoryInformationService,
    private deviceComponentInformationService: DeviceComponentInformationService,
    private adminDeviceInformationService: AdminDeviceInformationService<
      DeviceComponent
    >
  ) {
    this.categories$ = categoriesInformationService.getCategories();
    this.components$ = deviceComponentInformationService.getDeviceComponents();
    adminDeviceInformationService.dataSource$ = deviceComponentInformationService.getDeviceComponents();
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
    console.log(data);
  }

  selectionChange(data: DeviceComponent): void {
    console.log(data);
  }

  // Click event
  onClearClick(): void {
    this.adminDeviceInformationService.clearSubject$.next();
  }

  onResetClick(form: NgForm): void {
    console.log(form.value);
  }

  onSubmitClick(form: NgForm): void {
    console.log(form.value);
  }

  // Local helper method
  getCategoryiesFieldHeader(): string {
    if (this.selectedCategory === null) {
      return 'Choose category';
    }
    return this.selectedCategory;
  }
}
