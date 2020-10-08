import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DeviceComponent, Kind, Version } from 'src/app/shared/models';
import {
  AlertService,
  DeviceComponentInformationService,
  KindInformationService,
  VersionService,
} from 'src/app/core/services';

export class Model {
  id: number;
  name: string;
  major: number;
  minor: number;
  patch: number;
  kindId: number;
  componentId: number;
  fileToUpload: File = null;
}

@Component({
  selector: 'app-admin-version-detail',
  templateUrl: './admin-version-detail.component.html',
  styleUrls: ['./admin-version-detail.component.scss'],
})
export class AdminVersionDetailComponent {
  isCreatedMode = false;
  model: Model = new Model();

  deviceComponents$: Observable<DeviceComponent[]>;
  kinds$: Observable<Kind[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private kindInformationService: KindInformationService,
    private deviceComponentInformationService: DeviceComponentInformationService,
    private versionService: VersionService
  ) {
    this.deviceComponents$ = deviceComponentInformationService.getDeviceComponents();
    this.kinds$ = kindInformationService.getKinds();

    this.route.params.subscribe((params) => {
      this.isCreatedMode = params.id === '0';
      if (!this.isCreatedMode) {
        this.versionService.getVersion(params.id).subscribe(
          (version) => {
            this.model.id = params.id;
            this.model.name = version.name;
            this.model.kindId = version.kindId;
            this.model.componentId = version.componentId;
            this.model.major = version.major;
            this.model.minor = version.minor;
            this.model.patch = version.patch;
            this.model.fileToUpload = version.fileData;
          },
          (error) => {
            alertService.error(error);
          }
        );
      }
    });
  }

  onSubmitClick(form: NgForm): void {
    if (form.invalid || !this.model.fileToUpload) {
      if (!this.model.fileToUpload) {
        this.alertService.error('File is required!');
      }
      return;
    }

    const version: Version = {
      id: this.model.id,
      name: this.model.name,
      kindId: this.model.kindId,
      componentId: this.model.componentId,
      major: this.model.major,
      minor: this.model.minor,
      patch: this.model.patch,
    };

    if (this.isCreatedMode) {
      this.versionService.addVersion(version, this.model.fileToUpload).subscribe(
        (success) => {
          this.alertService.success('Version added');
          this.router.navigateByUrl('/admin/versions');
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    } else {
      this.versionService.updateVersion(this.model.id, version).subscribe(
        (success) => {
          this.alertService.success('Version updated');
          this.router.navigateByUrl('/admin/versions');
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    }
  }

  handleFileInput(files: FileList): void {
    this.model.fileToUpload = files.item(0);
  }
}
