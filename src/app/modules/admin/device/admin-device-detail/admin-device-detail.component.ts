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
} from 'src/app/core/_services';

@Component({
  selector: 'app-admin-device-detail',
  templateUrl: './admin-device-detail.component.html',
  styleUrls: ['./admin-device-detail.component.scss'],
})
export class AdminDeviceDetailComponent implements OnInit {
  model: DeviceEntry = new DeviceEntry();

  isCreatedMode = false;
  isPassMacAddress = false;
  autoUpdateGroupValue = 'auto';
  kinds$: Observable<Kind[]>;
  components$: Observable<DeviceComponent[]>;
  categories$: Observable<Category[]>;
  versions$: Observable<Version[]>;

  constructor(
    route: ActivatedRoute,
    private router: Router,
    private kindInformationService: KindInformationService,
    private categoryInformationService: CategoryInformationService,
    private deviceComponentInformationService: DeviceComponentInformationService,
    private deviceService: DeviceService,
    private alertService: AlertService
  ) {
    this.isCreatedMode = route.snapshot.data.isCreatedMode;
    this.components$ = deviceComponentInformationService.getDeviceComponents();
    this.kinds$ = kindInformationService.getKinds();
    this.categories$ = categoryInformationService.getCategories();

    route.params.subscribe((params) => {
      if (params.id) {
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

  onSubmitClick(): void {
    if (this.isCreatedMode) {
      this.deviceService.addDevice(this.model).subscribe(
        (next) => {
          this.alertService.success('Device updated');
          this.router.navigateByUrl('/admin/devices');
        },
        (error) => {
          this.alertService.error(error.message);
        }
      );
    } else {
      this.deviceService.updateDevice(this.model).subscribe(
        (next) => {
          this.alertService.success('Device added');
          this.router.navigateByUrl('/admin/devices');
        },
        (error) => {
          this.alertService.error(error.message);
        }
      );
    }
  }

  onClearVersionClick(): void {}

  getHeader(): string {
    return this.isCreatedMode ? 'Create new device' : 'Update device';
  }

  getSubmitButtonName(): string {
    return this.isCreatedMode ? 'Create' : 'Update';
  }

  isAutoUpdate(): boolean {
    return this.autoUpdateGroupValue === 'auto';
  }
}
