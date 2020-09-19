import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DeviceComponent, Kind, Version } from 'src/app/shared/models';
import {
  DeviceComponentInformationService,
  KindInformationService,
  VersionService,
} from 'src/app/core/_services';

@Component({
  selector: 'app-admin-version-detail',
  templateUrl: './admin-version-detail.component.html',
  styleUrls: ['./admin-version-detail.component.scss'],
})
export class AdminVersionDetailComponent implements OnInit {
  isCreatedMode = false;
  fileToUpload: File = null;
  versionId: number;
  // Initial form data
  name: string;
  major: number;
  minor: number;
  patch: number;
  kindId: number;
  deviceComponentId: number;

  deviceComponents$: Observable<DeviceComponent[]>;
  kinds$: Observable<Kind[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private kindInformationService: KindInformationService,
    private deviceComponentInformationService: DeviceComponentInformationService,
    private versionService: VersionService
  ) {
    this.isCreatedMode = route.snapshot.data.isCreatedMode;
    this.deviceComponents$ = deviceComponentInformationService.getDeviceComponents();
    this.kinds$ = kindInformationService.getKinds();

    if (!this.isCreatedMode) {
      this.route.params.subscribe((params) => {
        if (params.id) {
          this.versionService.getVersion(params.id).subscribe((version) => {
            this.versionId = version.id;
            this.name = version.name;
            this.kindId = version.kindId;
            this.deviceComponentId = version.deviceComponentId;
            this.major = version.major;
            this.minor = version.minor;
            this.patch = version.patch;
            this.fileToUpload = version.fileData;
          });
        }
      });
    }
  }

  ngOnInit(): void {}

  onSubmitClick(value: any): void {
    const version: Version = {
      name: value.name,
      major: value.major,
      minor: value.minor,
      patch: value.patch,
      kindId: value.kindId,
      deviceComponentId: value.deviceComponentId,
    };

    console.log(version);

    if (this.isCreatedMode) {
      this.versionService
        .addVersion(version, this.fileToUpload)
        .subscribe((success) => {
          this.router.navigateByUrl('/admin/versions');
        });
    } else {
      this.versionService
        .updateVersion(this.versionId, version)
        .subscribe((success) => {
          this.router.navigateByUrl('/admin/versions');
        });
    }
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
