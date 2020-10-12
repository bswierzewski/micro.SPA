import { CategoryInformationService } from '../../core/services';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as CategoryActions from '../actions/category.actions';

@Injectable()
export class CategoryEffects {
  constructor(private categoryService: CategoryInformationService, private action$: Actions) {}

  getCategories$ = createEffect(() =>
    this.action$.pipe(
      ofType(CategoryActions.loadCategories),
      mergeMap((action) =>
        this.categoryService.getCategories().pipe(
          map((data) => {
            return CategoryActions.loadCategoriesSuccess({ categories: data });
          }),
          catchError((error: Error) => {
            return of(CategoryActions.loadCategoriesError({ error }));
          })
        )
      )
    )
  );

  deleteCategory$ = createEffect(() =>
    this.action$.pipe(
      ofType(CategoryActions.deleteCategory),
      mergeMap((action) =>
        this.categoryService.removeCategory(action.id).pipe(
          map((data) => {
            return CategoryActions.deleteCategorySuccess({ id: action.id });
          }),
          catchError((error: Error) => {
            return of(CategoryActions.deleteCategoryError({ error }));
          })
        )
      )
    )
  );
}
