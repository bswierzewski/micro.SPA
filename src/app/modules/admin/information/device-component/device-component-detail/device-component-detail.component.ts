import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AlertService } from 'src/app/core/services';
import * as fromRoot from '../../../../../store/app.reducer';
import * as ComponentActions from '../../../../../store/actions/component.actions';
import * as CategoryActions from '../../../../../store/actions/category.actions';
import { Category, DeviceComponent } from 'src/app/shared/models';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-device-component-detail',
  templateUrl: './device-component-detail.component.html',
  styleUrls: ['./device-component-detail.component.scss'],
})
export class DeviceComponentDetailComponent implements OnInit {
  model: DeviceComponent;
  isLoading$: Observable<boolean>;
  isCreateMode: boolean;
  categories$: Observable<Category[]>;

  constructor(
    private store: Store<fromRoot.State>,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(CategoryActions.loadCategories());
    this.categories$ = this.store.select(fromRoot.getCategories);
    this.route.params.subscribe((params) => {
      this.isCreateMode = params.id === '0';
      if (!this.isCreateMode) {
        this.isLoading$ = this.store.select(fromRoot.getIsLoadingComponent);
        this.store.dispatch(ComponentActions.loadComponent({ id: params.id }));
        this.store
          .select(fromRoot.getComponent)
          .pipe(first((component) => component !== null))
          .subscribe((component) => {
            this.model = Object.assign({}, component);
          });
      } else {
        this.model = new DeviceComponent();
      }
    });
  }

  onSumbitClick(form: NgForm): void {
    if (form.invalid || !this.model.icon) {
      if (!this.model.icon) {
        this.alertService.error('Icon is required');
      }
      return;
    }

    if (this.model.category) {
      this.model.categoryId = this.model?.category[0]?.id;
    }

    if (this.isCreateMode) {
      this.store.dispatch(ComponentActions.addComponent({ component: this.model }));
    } else {
      this.store.dispatch(ComponentActions.updateComponent({ component: this.model }));
    }
  }

  onReturnClick(): void {
    this.router.navigateByUrl('/admin/information/components');
  }

  getHeader(): string {
    if (this.model.category) {
      return this.model.category[0].name;
    }
    return 'Choose category';
  }
}
