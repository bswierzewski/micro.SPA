import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DeviceComponent } from 'src/app/modules/models/device-information/DeviceComponent';
import { Kind } from 'src/app/modules/models/device-information/Kind';
import { KindInformationService } from 'src/app/modules/_services/device-information/kind-information.service';
import { DeviceComponentInformationService } from 'src/app/modules/_services/device-information/device-component-information.service';

@Component({
  selector: 'app-admin-version-detail',
  templateUrl: './admin-version-detail.component.html',
  styleUrls: ['./admin-version-detail.component.scss'],
})
export class AdminVersionDetailComponent implements OnInit {
  isCreatedMode = false;
  fileToUpload: File = null;

  // Initial form data
  name: string;
  major: number;
  minor: number;
  patch: number;
  kind: Kind;
  deviceComponent: DeviceComponent;

  deviceComponents$: Observable<DeviceComponent[]>;
  kinds$: Observable<Kind[]>;

  constructor(
    route: ActivatedRoute,
    private kindInformationService: KindInformationService,
    private deviceComponentInformationService: DeviceComponentInformationService
  ) {
    this.isCreatedMode = route.snapshot.data.isCreatedMode;
    this.deviceComponents$ = deviceComponentInformationService.getDeviceComponents();
    this.kinds$ = kindInformationService.getKinds();
  }

  ngOnInit(): void {}

  onSubmitClick(value: NgForm): void {
    console.log(value.form.value);
    value.resetForm();
    this.fileToUpload = null;
  }

  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
  }

  getHeader(): string {
    return this.isCreatedMode ? 'Create new version' : 'Update version';
  }

  getSubmitButtonName(): string {
    return this.isCreatedMode ? 'Create' : 'Update';
  }

  getInputFileText(): string {
    return this.fileToUpload ? this.fileToUpload.name : 'Choose file';
  }
}
