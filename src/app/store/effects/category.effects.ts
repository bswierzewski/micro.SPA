import { AlertService, CategoryInformationService } from '../../core/services';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as CategoryActions from '../actions/category.actions';
import { Router } from '@angular/router';
import { Category } from 'src/app/shared/models';

@Injectable()
export class CategoryEffects {
  constructor(
    private categoryService: CategoryInformationService,
    private action$: Actions,
    private router: Router,
    private alertService: AlertService
  ) {}

  getCategories$ = createEffect(() =>
    this.action$.pipe(
      ofType(CategoryActions.loadCategories),
      mergeMap((action) =>
        this.categoryService.getCategories().pipe(
          map((data) => {
            return CategoryActions.loadCategoriesSuccess({ categories: data });
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(CategoryActions.loadCategoriesError({ error }));
          })
        )
      )
    )
  );

  getCategory$ = createEffect(() =>
    this.action$.pipe(
      ofType(CategoryActions.loadCategory),
      mergeMap((action) => {
        if (action.id === 0) {
          return of(CategoryActions.loadCategorySuccess({ category: new Category() }));
        } else {
          return this.categoryService.getCategory(action.id).pipe(
            map((data) => {
              return CategoryActions.loadCategorySuccess({ category: data });
            }),
            catchError((error: Error) => {
              this.alertService.error(error.message);
              this.router.navigateByUrl('/admin/information/categories');
              return of(CategoryActions.loadCategoryError({ error }));
            })
          );
        }
      })
    )
  );

  deleteCategory$ = createEffect(() =>
    this.action$.pipe(
      ofType(CategoryActions.deleteCategory),
      mergeMap((action) =>
        this.categoryService.deleteCategory(action.id).pipe(
          map((data) => {
            this.alertService.success('Category deleted successfully.');
            return CategoryActions.deleteCategorySuccess({ id: action.id });
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(CategoryActions.deleteCategoryError({ error }));
          })
        )
      )
    )
  );

  addCategory$ = createEffect(() =>
    this.action$.pipe(
      ofType(CategoryActions.addCategory),
      mergeMap((action) => {
        return this.categoryService.addCategory(action.category).pipe(
          map((data) => {
            this.alertService.success('Category added successfully.');
            this.router.navigateByUrl('/admin/information/categories');
            return CategoryActions.addCategorySuccess();
          }),
          catchError((error: Error) => {
            this.alertService.error(error.name);
            return of(CategoryActions.addCategoryError({ error }));
          })
        );
      })
    )
  );

  updateCategory$ = createEffect(() =>
    this.action$.pipe(
      ofType(CategoryActions.updateCategory),
      mergeMap((action) => {
        return this.categoryService.updateCategory(action.category).pipe(
          map((data) => {
            this.alertService.success('Category updated successfully.');
            this.router.navigateByUrl('/admin/information/categories');
            return CategoryActions.updateCategorySuccess();
          }),
          catchError((error: Error) => {
            this.alertService.error(error.message);
            return of(CategoryActions.updateCategoryError({ error }));
          })
        );
      })
    )
  );
}
