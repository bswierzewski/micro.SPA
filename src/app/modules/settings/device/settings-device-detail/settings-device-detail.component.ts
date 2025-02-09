import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category, Device, DeviceComponent, Kind, Version } from 'src/app/shared/models';
import { AlertService } from 'src/app/core/services';
import { NgForm } from '@angular/forms';
import * as fromRoot from '../../../../store/app.reducer';
import {
  DeviceActions,
  ComponentActions,
  CategoryActions,
  KindActions,
  VersionActions,
} from '../../../../store/actions';
import { select, Store } from '@ngrx/store';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-settings-device-detail',
  templateUrl: './settings-device-detail.component.html',
  styleUrls: ['./settings-device-detail.component.scss'],
})
export class SettingsDeviceDetailComponent implements OnInit {
  model: Device;

  isCreatedMode = false;
  isEnabledMacAddress = true;
  isLoading$: Observable<boolean>;
  kinds$: Observable<Kind[]>;
  components$: Observable<DeviceComponent[]>;
  categories$: Observable<Category[]>;
  versions$: Observable<Version[]>;

  constructor(
    private router: Router,
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(ComponentActions.clear());
    this.isLoading$ = this.store.select(fromRoot.getIsLoadingDevice);
    this.store.dispatch(CategoryActions.loadCategories());
    this.store.dispatch(KindActions.loadKinds());
    this.store.dispatch(VersionActions.loadVersions());
    this.categories$ = this.store.select(fromRoot.getCategories);
    this.kinds$ = this.store.select(fromRoot.getKinds);
    this.components$ = this.store.select(fromRoot.getComponents);
    this.versions$ = this.store.select(fromRoot.getVersions);

    this.route.params.subscribe((params) => {
      this.isCreatedMode = params.id === '0';
      this.store.dispatch(DeviceActions.loadDevice({ id: Number(params.id) }));
      this.store
        .pipe(
          select(fromRoot.getDevice),
          first((device) => device !== null)
        )
        .subscribe((device) => {
          if (device?.categoryId) {
            this.store.dispatch(ComponentActions.loadComponents({ id: device.categoryId }));
          }
          this.model = Object.assign({}, device);

          if (params.address) {
            this.model.addressLabel = params.address;
          }
          this.isEnabledMacAddress = this.model.addressLabel?.length > 0;
        });
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
      this.store.dispatch(DeviceActions.addDevice({ device: this.model }));
    } else {
      this.store.dispatch(DeviceActions.updateDevice({ device: this.model }));
    }
  }

  buttonAutoUpdateChange(isAutoUpdate: boolean): void {
    if (isAutoUpdate) {
      this.model.versionId = null;
    }
  }
}
