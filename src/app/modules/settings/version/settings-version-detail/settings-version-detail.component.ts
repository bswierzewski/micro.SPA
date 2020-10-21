import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DeviceComponent, Kind, Version } from 'src/app/shared/models';
import { AlertService } from 'src/app/core/services';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../../store/app.reducer';
import { KindActions, ComponentActions, VersionActions } from '../../../../store/actions';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-settings-version-detail',
  templateUrl: './settings-version-detail.component.html',
  styleUrls: ['./settings-version-detail.component.scss'],
})
export class SettingsVersionDetailComponent implements OnInit {
  isCreatedMode = false;
  model: Version;

  isLoading$: Observable<boolean>;
  deviceComponents$: Observable<DeviceComponent[]>;
  kinds$: Observable<Kind[]>;

  constructor(
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(ComponentActions.loadComponents({}));
    this.store.dispatch(KindActions.loadKinds());
    this.isLoading$ = this.store.select(fromRoot.getIsLoadingVersion);
    this.deviceComponents$ = this.store.select(fromRoot.getComponents);
    this.kinds$ = this.store.select(fromRoot.getKinds);

    this.route.params.subscribe((params) => {
      this.isCreatedMode = params.id === '0';
      this.store.dispatch(VersionActions.loadVersion({ id: Number(params.id) }));
      this.store
        .pipe(
          select(fromRoot.getVersion),
          first((version) => version !== null)
        )
        .subscribe((version) => {
          this.model = Object.assign({}, version);
        });
    });
  }

  onSubmitClick(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    if (this.isCreatedMode && !this.model.fileData) {
      this.alertService.error('File is required!');
      return;
    }

    if (this.isCreatedMode) {
      this.store.dispatch(VersionActions.addVersion({ version: this.model }));
    } else {
      this.store.dispatch(VersionActions.updateVersion({ version: this.model }));
    }
  }

  onReturnClick(): void {
    this.router.navigateByUrl('/settings/versions');
  }

  handleFileInput(files: FileList): void {
    this.model.fileData = files.item(0);
  }
}
