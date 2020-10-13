import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DeviceComponent, Category, Kind, Device } from 'src/app/shared/models';
import { DeviceParams } from 'src/app/shared/params';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../store/app.reducer';
import * as DeviceActions from '../../../../store/actions/device.actions';
import * as ComponentActions from '../../../../store/actions/component.actions';
import * as KindActions from '../../../../store/actions/kind.actions';
import * as CategoryActions from '../../../../store/actions/category.actions';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  isLoading$: Observable<boolean>;
  kinds$: Observable<Kind[]>;
  categories$: Observable<Category[]>;
  components$: Observable<DeviceComponent[]>;
  devices$: Observable<Device[]>;
  params: DeviceParams = new DeviceParams();

  isCategorySelected = () => this.params?.categoryId;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoadingDevice);
    this.store.dispatch(DeviceActions.loadDevices({}));
    this.store.dispatch(ComponentActions.loadComponents({}));
    this.store.dispatch(KindActions.loadKinds());
    this.store.dispatch(CategoryActions.loadCategories());
    this.devices$ = this.store.select(fromRoot.getDevices);
    this.components$ = this.store.select(fromRoot.getComponents);
    this.categories$ = this.store.select(fromRoot.getCategories);
    this.kinds$ = this.store.select(fromRoot.getKinds);
  }

  onApplyFilterClick(): void {
    this.store.dispatch(DeviceActions.loadDevices({ params: Object.assign({}, this.params) }));
  }

  onResetFilterClick(): void {
    this.params = new DeviceParams();
    this.store.dispatch(DeviceActions.loadDevices({ params: Object.assign({}, this.params) }));
  }

  categorySelectionChange(categoryId: number): void {
    if (categoryId) {
      this.store.dispatch(ComponentActions.loadComponents({ id: categoryId }));
    } else {
      this.components$ = of([]);
    }
  }
}
