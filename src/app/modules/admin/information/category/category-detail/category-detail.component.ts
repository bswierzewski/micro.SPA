import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../../../../store/app.reducer';
import * as CategoryActions from '../../../../../store/actions/category.actions';
import * as ComponentActions from '../../../../../store/actions/component.actions';
import { AlertService } from 'src/app/core/services';
import { DeviceComponent, Category } from 'src/app/shared/models';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {
  model: Category;
  isCreateMode = false;
  isLoading$: Observable<boolean>;
  components$: Observable<DeviceComponent[]>;

  constructor(
    private store: Store<fromRoot.State>,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(ComponentActions.loadComponents({}));
    this.isLoading$ = this.store.select(fromRoot.getIsLoadingCategory);
    this.components$ = this.store.select(fromRoot.getComponents);
    this.route.params.subscribe((params) => {
      this.isCreateMode = params.id === '0';
      this.store.dispatch(CategoryActions.loadCategory({ id: Number(params.id) }));
      this.store
        .select(fromRoot.getCategory)
        .pipe(first((category) => category !== null))
        .subscribe((category) => {
          this.model = Object.assign({}, category);
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

    if (this.model?.components?.length > 0) {
      this.model.componentIds = this.model.components.map((x) => x.id);
    }

    if (this.isCreateMode) {
      this.store.dispatch(CategoryActions.addCategory({ category: this.model }));
    } else {
      this.store.dispatch(CategoryActions.updateCategory({ category: this.model }));
    }
  }

  onReturnClick(): void {
    this.router.navigateByUrl('/admin/information/categories');
  }

  getHeader(): string {
    if (this.model.components?.length > 1) {
      return `${this.model.components[0].name} (+${this.model.components.length - 1} ${
        this.model.components?.length === 2 ? 'other' : 'others'
      })`;
    }

    if (this.model.components?.length === 1) {
      return `${this.model.components[0].name}`;
    }

    return 'Choose components';
  }

  compareComponents(o1: DeviceComponent, o2: DeviceComponent): boolean {
    if (o1.id === o2.id) {
      return true;
    } else {
      return false;
    }
  }
}
