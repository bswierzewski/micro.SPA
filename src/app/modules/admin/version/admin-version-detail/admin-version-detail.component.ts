import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DeviceComponent, Kind, Version } from 'src/app/shared/models';
import { DeviceComponentInformationService, KindInformationService, VersionService } from 'src/app/core/_services';

export class Model {
  name: string;
  major: number;
  minor: number;
  patch: number;
  kindId: number;
  deviceComponentId: number;
  versionId: number;
  fileToUpload: File = null;
}

@Component({
  selector: 'app-admin-version-detail',
  templateUrl: './admin-version-detail.component.html',
  styleUrls: ['./admin-version-detail.component.scss'],
})
export class AdminVersionDetailComponent implements OnInit {
  isCreatedMode = false;
  // Initial form data
  model: Model = new Model();

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
            this.model.versionId = version.id;
            this.model.name = version.name;
            this.model.kindId = version.kindId;
            this.model.deviceComponentId = version.deviceComponentId;
            this.model.major = version.major;
            this.model.minor = version.minor;
            this.model.patch = version.patch;
            this.model.fileToUpload = version.fileData;
          });
        }
      });
    }
  }

  ngOnInit(): void {}

  onSubmitClick(form: NgForm): void {
    const version: Version = {
      name: this.model.name,
      major: this.model.major,
      minor: this.model.minor,
      patch: this.model.patch,
      kindId: this.model.kindId,
      deviceComponentId: this.model.deviceComponentId,
    };

    if (this.isCreatedMode) {
      this.versionService.addVersion(version, this.model.fileToUpload).subscribe((success) => {
        this.router.navigateByUrl('/admin/versions');
      });
    } else {
      this.versionService.updateVersion(this.model.versionId, version).subscribe((success) => {
        this.router.navigateByUrl('/admin/versions');
      });
    }
  }

  handleFileInput(files: FileList): void {
    this.model.fileToUpload = files.item(0);
  }

  getHeader(): string {
    return this.isCreatedMode ? 'Create new version' : 'Update version';
  }

  getSubmitButtonName(): string {
    return this.isCreatedMode ? 'Create' : 'Update';
  }

  getInputFileText(): string {
    return this.model.fileToUpload ? this.model.fileToUpload.name : 'Choose file';
  }
}
