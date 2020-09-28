import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category, Device, DeviceComponent, DeviceEntry, Kind, Version } from 'src/app/shared/models';
import {
  DeviceComponentInformationService,
  KindInformationService,
  DeviceService,
  AlertService,
  CategoryInformationService,
  VersionService,
} from 'src/app/core/_services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-device-detail',
  templateUrl: './admin-device-detail.component.html',
  styleUrls: ['./admin-device-detail.component.scss'],
})
export class AdminDeviceDetailComponent implements OnInit {
  model: DeviceEntry = new DeviceEntry();

  isCreatedMode = false;
  isPassMacAddress = false;
  isAutoUpdate = false;
  kinds$: Observable<Kind[]>;
  components$: Observable<DeviceComponent[]>;
  categories$: Observable<Category[]>;
  versions$: Observable<Version[]>;

  constructor(
    route: ActivatedRoute,
    kindService: KindInformationService,
    categoryService: CategoryInformationService,
    versionService: VersionService,
    private componentService: DeviceComponentInformationService,
    private router: Router,
    private deviceService: DeviceService,
    private alertService: AlertService
  ) {
    this.kinds$ = kindService.getKinds();
    this.categories$ = categoryService.getCategories();
    this.versions$ = versionService.getVersions();

    route.params.subscribe((params) => {
      this.isCreatedMode = Number(params.id) === 0;

      if (params.id && params.id > 0) {
        this.deviceService.getDevice(params.id).subscribe((value: Device) => {
          this.model.id = params.id;
          this.model.icon = value.icon;
          this.model.name = value.name;
          this.model.address = value.address?.label;
          this.model.kindId = value.kind?.id;
          this.model.componentId = value.component?.id;
          this.model.categoryId = value.category?.id;
        });
      } else if (params.address) {
        this.isPassMacAddress = true;
        this.model.address = params.address;
      }
    });
  }

  ngOnInit(): void {}

  selectionCategoryChange(categoryId: number): void {
    this.components$ = this.componentService.getDeviceComponents(categoryId);
  }

  onSubmitClick(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    if (this.isCreatedMode) {
      this.deviceService.addDevice(this.model).subscribe(
        (next) => {
          this.alertService.success('Device updated');
          this.router.navigateByUrl('/admin/devices');
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    } else {
      this.deviceService.updateDevice(this.model).subscribe(
        (next) => {
          this.alertService.success('Device added');
          this.router.navigateByUrl('/admin/devices');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  buttonAutoUpdateChange(isAutoUpdate: boolean): void {
    if (isAutoUpdate) {
      this.model.versionId = null;
    }
  }
}
