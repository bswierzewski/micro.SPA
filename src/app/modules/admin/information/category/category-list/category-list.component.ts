import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlertService, CategoryInformationService } from 'src/app/core/services';
import { Category } from 'src/app/shared/models';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'actions'];
  dataSource = new MatTableDataSource<Category>();

  constructor(private categoryService: CategoryInformationService, private alertService: AlertService) {
    this.loadCategories();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      (next) => {
        this.dataSource.data = next;
      },
      (error) => {
        this.alertService.error(error);
      }
    );
  }

  deleteCategory(id: number): void {
    this.alertService.confirm('Are you sure?', () => {
      this.categoryService.removeCategory(id).subscribe(
        (next) => {
          this.alertService.success(`Category deleted`);
          this.loadCategories();
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    });
  }
}
