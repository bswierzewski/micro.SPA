import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/core/services';
import { Kind } from 'src/app/shared/models';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../../store/app.reducer';
import * as KindActions from '../../../../../store/actions/kind.actions';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kind-detail',
  templateUrl: './kind-detail.component.html',
  styleUrls: ['./kind-detail.component.scss'],
})
export class KindDetailComponent implements OnInit {
  model: Kind;
  isLoading$: Observable<boolean>;
  isCreateMode: boolean;

  constructor(
    private store: Store<fromRoot.State>,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.route.params.subscribe((params) => {
      this.store.dispatch(KindActions.loadKind({ id: params.id }));
      this.store.select(fromRoot.getKind).subscribe((kind) => {
        this.model = kind;
        this.isCreateMode = kind?.id === 0;
      });
    });
  }

  onSumbitClick(form: NgForm): void {
    if (form.invalid || !this.model.icon) {
      if (!this.model.icon) {
        this.alertService.error('Icon is required');
      }
      return;
    }

    if (this.isCreateMode) {
      this.store.dispatch(KindActions.addKind({ kind: this.model }));
    } else {
      this.store.dispatch(KindActions.updateKind({ kind: this.model }));
    }
  }

  onReturnClick(): void {
    this.router.navigateByUrl('/admin/information/kinds');
  }
}
