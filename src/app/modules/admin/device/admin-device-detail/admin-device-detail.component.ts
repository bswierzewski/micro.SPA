import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category, Device, DeviceComponent, DeviceEntry, Kind, Version } from 'src/app/shared/models';
import { DeviceService, AlertService, VersionService } from 'src/app/core/services';
import { NgForm } from '@angular/forms';
import * as fromRoot from '../../../../store/app.reducer';
import * as ComponentActions from '../../../../store/actions/component.actions';
import * as CategoryActions from '../../../../store/actions/category.actions';
import * as KindActions from '../../../../store/actions/kind.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-admin-device-detail',
  templateUrl: './admin-device-detail.component.html',
  styleUrls: ['./admin-device-detail.component.scss'],
})
export class AdminDeviceDetailComponent implements OnInit {
  model: DeviceEntry = new DeviceEntry();

  isCreatedMode = false;
  isPassMacAddress = false;
  kinds$: Observable<Kind[]>;
  components$: Observable<DeviceComponent[]>;
  categories$: Observable<Category[]>;
  versions$: Observable<Version[]>;

  constructor(
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute,
    private router: Router,
    private versionService: VersionService,
    private deviceService: DeviceService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(CategoryActions.loadCategories());
    this.store.dispatch(KindActions.loadKinds());
    this.store.dispatch(ComponentActions.clear());
    this.categories$ = this.store.select(fromRoot.getCategories);
    this.kinds$ = this.store.select(fromRoot.getKinds);
    this.components$ = this.store.select(fromRoot.getComponents);
    this.versions$ = this.versionService.getVersions();

    this.route.params.subscribe((params) => {
      this.isCreatedMode = Number(params.id) === 0;

      if (params.id && params.id > 0) {
        this.deviceService.getDevice(params.id).subscribe((device: Device) => {
          if (device?.category?.id) {
            this.store.dispatch(ComponentActions.loadComponents({ id: device.category?.id }));
          }
          this.model.id = params.id;
          this.model.icon = device.icon;
          this.model.name = device.name;
          this.model.address = device.address?.label;
          this.model.kindId = device.kind?.id;
          this.model.categoryId = device.category?.id;
          this.model.componentId = device.component?.id;
          this.model.versionId = device.version?.id;
        });
      } else if (params.address) {
        this.isPassMacAddress = true;
        this.model.address = params.address;
      }
    });
  }

  selectionCategoryChange(categoryId: number): void {
    this.store.dispatch(ComponentActions.loadComponents({ id: categoryId }));
  }

  onSubmitClick(form: NgForm): void {
    if (form.invalid || !this.model.icon) {
      if (!this.model.icon) {
        this.alertService.error('Icon is required');
      }
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
