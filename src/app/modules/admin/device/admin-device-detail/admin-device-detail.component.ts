import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DeviceComponent, Kind, Version } from 'src/app/shared/models';
import { DeviceComponentInformationService, KindInformationService, DeviceService } from 'src/app/core/_services';

export class DataModel {
  macAddress = '';
  name = '';
  icon = '';
  kindId = 0;
  deviceComponentId = 0;
  versionId = 0;
}

@Component({
  selector: 'app-admin-device-detail',
  templateUrl: './admin-device-detail.component.html',
  styleUrls: ['./admin-device-detail.component.scss'],
})
export class AdminDeviceDetailComponent implements OnInit {
  dataModel: DataModel = new DataModel();

  isCreatedMode = false;
  isPassMacAddress = false;
  autoUpdateGroupValue = 'auto';
  kinds$: Observable<Kind[]>;
  deviceComponents$: Observable<DeviceComponent[]>;
  versions$: Observable<Version[]>;

  constructor(
    route: ActivatedRoute,
    private kindInformationService: KindInformationService,
    private deviceComponentInformationService: DeviceComponentInformationService,
    private deviceService: DeviceService
  ) {
    this.isCreatedMode = route.snapshot.data.isCreatedMode;
    this.deviceComponents$ = deviceComponentInformationService.getDeviceComponents();
    this.kinds$ = kindInformationService.getKinds();
    route.params.subscribe((params) => {
      if (params.id) {
        this.deviceService.getDevice(params.id).subscribe((next) => {
          this.dataModel.icon = next.icon;
          this.dataModel.name = next.name;
          this.dataModel.macAddress = next.address?.label;
          this.dataModel.kindId = next.kind?.id;
          this.dataModel.deviceComponentId = next.deviceComponent?.id;
          this.dataModel.versionId = next.version?.id;
        });
      } else if (params.address) {
        this.isPassMacAddress = true;
        this.dataModel.macAddress = params.address;
      }
    });
  }

  ngOnInit(): void {}

  onSubmitClick(values: any): void {
    console.log(this.dataModel);
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
