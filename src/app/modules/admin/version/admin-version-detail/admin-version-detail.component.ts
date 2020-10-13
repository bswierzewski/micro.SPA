import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DeviceComponent, Kind, Version } from 'src/app/shared/models';
import { AlertService } from 'src/app/core/services';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../../store/app.reducer';
import * as KindActions from '../../../../store/actions/kind.actions';
import * as ComponentActions from '../../../../store/actions/component.actions';
import * as VersionActions from '../../../../store/actions/version.actions';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-admin-version-detail',
  templateUrl: './admin-version-detail.component.html',
  styleUrls: ['./admin-version-detail.component.scss'],
})
export class AdminVersionDetailComponent implements OnInit {
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
    this.isLoading$ = this.store.select(fromRoot.getIsLoadingVersion);
    this.store.dispatch(ComponentActions.loadComponents({}));
    this.store.dispatch(KindActions.loadKinds());
    this.deviceComponents$ = this.store.select(fromRoot.getComponents);
    this.kinds$ = this.store.select(fromRoot.getKinds);

    this.route.params.subscribe((params) => {
      this.isCreatedMode = params.id === '0';
      if (!this.isCreatedMode) {
        this.store.dispatch(VersionActions.loadVersion({ id: params.id }));
        this.store
          .pipe(
            select(fromRoot.getVersion),
            first((x) => x !== null)
          )
          .subscribe((version) => {
            this.model = Object.assign({}, version);
          });
      } else {
        this.model = new Version();
      }
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
    this.router.navigateByUrl('/admin/versions');
  }

  handleFileInput(files: FileList): void {
    this.model.fileData = files.item(0);
  }
}
