import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { AlertService, CategoryInformationService } from 'src/app/core/services';
import { Category } from 'src/app/shared/models';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../../store/app.reducer';
import * as CategoryActions from '../../../../../store/actions/category.actions';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['position', 'name', 'actions'];
  isLoading$: Observable<boolean>;
  dataSource = new MatTableDataSource<Category>();

  constructor(
    private store: Store<fromRoot.State>,
    private categoryService: CategoryInformationService,
    private alertService: AlertService
  ) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.store.select(fromRoot.getCategories).subscribe((data) => {
      this.dataSource.data = data;
    });
    this.isLoading$ = this.store.select(fromRoot.getIsLoadingCategories);
    this.store.dispatch(CategoryActions.loadCategories());
  }

  deleteCategory(id: number): void {
    this.alertService.confirm('Are you sure?', () => {
      this.store.dispatch(CategoryActions.deleteCategory({ id }));
    });
  }
}
