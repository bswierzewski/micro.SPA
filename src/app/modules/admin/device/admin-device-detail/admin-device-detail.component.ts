import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category, Device, DeviceComponent, Kind, Version } from 'src/app/shared/models';
import { AlertService } from 'src/app/core/services';
import { NgForm } from '@angular/forms';
import * as fromRoot from '../../../../store/app.reducer';
import * as DeviceActions from '../../../../store/actions/device.actions';
import * as ComponentActions from '../../../../store/actions/component.actions';
import * as CategoryActions from '../../../../store/actions/category.actions';
import * as KindActions from '../../../../store/actions/kind.actions';
import * as VersionActions from '../../../../store/actions/version.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-admin-device-detail',
  templateUrl: './admin-device-detail.component.html',
  styleUrls: ['./admin-device-detail.component.scss'],
})
export class AdminDeviceDetailComponent implements OnInit {
  model: Device;

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
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(CategoryActions.loadCategories());
    this.store.dispatch(KindActions.loadKinds());
    this.store.dispatch(VersionActions.loadVersions());
    this.store.dispatch(ComponentActions.clear());
    this.categories$ = this.store.select(fromRoot.getCategories);
    this.kinds$ = this.store.select(fromRoot.getKinds);
    this.components$ = this.store.select(fromRoot.getComponents);
    this.versions$ = this.store.select(fromRoot.getVersions);

    this.route.params.subscribe((params) => {
      this.isCreatedMode = params.id === '0';

      if (!this.isCreatedMode) {
        this.store.dispatch(DeviceActions.loadDevice({ id: params.id }));
        this.store.select(fromRoot.getDevice).subscribe((device) => {
          if (device?.category?.id) {
            this.store.dispatch(ComponentActions.loadComponents({ id: device.category.id }));
          }
        });
      } else {
        this.model = new Device();
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
