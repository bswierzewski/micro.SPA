import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, CategoryInformationService, DeviceComponentInformationService } from 'src/app/core/_services';
import { DeviceComponent, Category } from 'src/app/shared/models';

export class Model {
  id = 0;
  name = '';
  icon = '';
  components: DeviceComponent[] = [];
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
    componentService.getDeviceComponents().subscribe((data) => {
      this.components = data;
    });

    route.params.subscribe((params) => {
      this.isCreateMode = params.id === '0';
      if (!this.isCreateMode) {
        categoryService.getCategory(params.id).subscribe(
          (data) => {
            this.model.id = data.id;
            this.model.name = data.name;
            this.model.icon = data.icon;
            this.model.components = this.components?.filter((component) => data.componentIds?.includes(component.id));
          },
          (error) => {
            alertService.error(error);
          }
        );
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

    const category = {
      id: this.model.id,
      name: this.model.name,
      icon: this.model.icon,
      componentIds: this.model.components?.map((component) => component.id),
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
}
