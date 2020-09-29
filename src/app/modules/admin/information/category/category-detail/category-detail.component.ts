import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService, CategoryInformationService, DeviceComponentInformationService } from 'src/app/core/_services';
import { DeviceComponent, Category } from 'src/app/shared/models';

export class Model {
  id = 0;
  name = '';
  icon = '';
  componentIndexes: number[] = [];
  isExpanded = false;
}

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent {
  model = new Model();
  isCreateMode = false;
  components$: Observable<DeviceComponent[]>;

  constructor(
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryInformationService,
    private componentService: DeviceComponentInformationService
  ) {
    route.params.subscribe((params) => {
      this.isCreateMode = params.id === '0';
      if (params.id === 0) {
      } else {
      }
    });
    this.components$ = componentService.getDeviceComponents();
  }

  onSumbitClick(form: NgForm): void {
    if (form.invalid || !this.model.icon) {
      if (!this.model.icon) {
        this.alertService.error('Icon is required');
      }
      return;
    }

    const category = {
      name: this.model.name,
      icon: this.model.icon,
    } as Category;

    if (this.isCreateMode) {
      this.categoryService.addCategory(category).subscribe(
        (next) => {
          this.alertService.success('Category added');
          this.router.navigateByUrl('/admin/information/categories');
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    } else {
      this.categoryService.updateCategory(category).subscribe(
        (next) => {
          this.alertService.success('Category updated');
          this.router.navigateByUrl('/admin/information/categories');
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    }
  }

  onReturnClick(): void {
    this.router.navigateByUrl('/admin/information/categories');
  }
}
