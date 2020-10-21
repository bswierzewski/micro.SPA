import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/core/services';
import { Version } from 'src/app/shared/models';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../store/app.reducer';
import { VersionActions } from '../../../../store/actions';

@Component({
  selector: 'app-settings-version-list',
  templateUrl: './settings-version-list.component.html',
  styleUrls: ['./settings-version-list.component.scss'],
})
export class SettingsVersionListComponent implements OnInit {
  autoColumns: string[] = ['id', 'created', 'name', 'major', 'minor', 'patch', 'kind', 'component', 'fileData'];
  displayedColumns: string[] = ['action', ...this.autoColumns];
  versions$: Observable<Version[]>;
  isLoading$: Observable<boolean>;
  constructor(private store: Store<fromRoot.State>, private alertService: AlertService) {}

  ngOnInit(): void {
    this.store.dispatch(VersionActions.loadVersions());
    this.isLoading$ = this.store.select(fromRoot.getIsLoadingKind);
    this.versions$ = this.store.select(fromRoot.getVersions);
  }

  deleteVersion(id: number): void {
    this.store.dispatch(VersionActions.deleteVersion({ id }));
  }
}
