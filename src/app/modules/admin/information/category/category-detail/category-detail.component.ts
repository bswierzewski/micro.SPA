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
  isExpanded = false;
  componentIds: number[] = [];
}

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent {
  model = new Model();
  isCreateMode = false;
  components: DeviceComponent[];

  constructor(
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryInformationService,
    private componentService: DeviceComponentInformationService
  ) {
    route.params.subscribe((params) => {
      this.isCreateMode = params.id === '0';
      if (!this.isCreateMode) {
        categoryService.getCategory(params.id).subscribe(
          (data) => {
            this.model.name = data.name;
            this.model.icon = data.icon;
            this.model.componentIds = data.components;
          },
          (error) => {
            alertService.error(error);
          }
        );
      }
    });

    componentService.getDeviceComponents().subscribe((data) => {
      this.components = data;
    });
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
      components: this.model.componentIds,
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

  getHeader(): string {
    if (this.model.componentIds?.length === undefined) {
      return 'Choose components';
    }

    if (this.model.componentIds.length === 1) {
      return this.components.find((x) => x.id === this.model.componentIds[0])?.name;
    } else if (this.model.componentIds?.length === 2) {
      return (
        this.components.find((x) => x.id === this.model.componentIds[0])?.name +
        ` (+ ${this.model.componentIds.length - 1} other)`
      );
    } else if (this.model.componentIds.length > 1) {
      return (
        this.components.find((x) => x.id === this.model.componentIds[0])?.name +
        ` (+ ${this.model.componentIds.length - 1} others)`
      );
    }

    return 'Choose components';
  }
}
