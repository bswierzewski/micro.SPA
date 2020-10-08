import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertService, VersionService } from 'src/app/core/services';
import { Version } from 'src/app/shared/models';

@Component({
  selector: 'app-admin-version-list',
  templateUrl: './admin-version-list.component.html',
  styleUrls: ['./admin-version-list.component.scss'],
})
export class AdminVersionListComponent {
  autoColumns: string[] = ['id', 'created', 'name', 'major', 'minor', 'patch', 'kind', 'component', 'fileData'];
  displayedColumns: string[] = [...this.autoColumns, 'action'];
  versions$: Observable<Version[]>;
  constructor(private versionService: VersionService, private alertService: AlertService) {
    this.loadVersions();
  }

  loadVersions(): void {
    this.versions$ = this.versionService.getVersions();
  }

  deleteVersion(id: number): void {
    this.versionService.deleteVersion(id).subscribe(
      (next) => {
        this.alertService.success('Version deleted');
        this.loadVersions();
      },
      (error) => {
        this.alertService.error(error);
      }
    );
  }
}
