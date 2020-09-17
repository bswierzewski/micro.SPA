import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VersionService } from 'src/app/core/_services';
import { Version } from 'src/app/shared/models';

@Component({
  selector: 'app-admin-version-list',
  templateUrl: './admin-version-list.component.html',
  styleUrls: ['./admin-version-list.component.scss'],
})
export class AdminVersionListComponent implements OnInit {
  autoColumns: string[] = [
    'id',
    'created',
    'name',
    'major',
    'minor',
    'patch',
    'kind',
    'deviceComponent',
    'fileData',
  ];
  displayedColumns: string[] = [...this.autoColumns, 'action'];
  versions$: Observable<Version[]>;
  constructor(private versionService: VersionService) {
    this.versions$ = versionService.getVersions();
  }

  ngOnInit(): void {}
}
