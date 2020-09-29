import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, CategoryInformationService, DeviceComponentInformationService } from 'src/app/core/_services';
import { Category, DeviceComponent } from 'src/app/shared/models';

export class Model {
  id = 0;
  name = '';
  icon = '';
  category: Category[] = [];
}

@Component({
  selector: 'app-device-component-detail',
  templateUrl: './device-component-detail.component.html',
  styleUrls: ['./device-component-detail.component.scss'],
})
export class DeviceComponentDetailComponent {
  model = new Model();
  isCreateMode = false;
  categories: Category[];

  constructor(
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryInformationService,
    private componentService: DeviceComponentInformationService
  ) {
    categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });

    route.params.subscribe((params) => {
      this.isCreateMode = params.id === '0';
      if (!this.isCreateMode) {
        componentService.getDeviceComponent(params.id).subscribe(
          (data) => {
            this.model.id = data.id;
            this.model.name = data.name;
            this.model.icon = data.icon;
            this.model.category = this.categories.filter((category) => category.id === data.categoryId);
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

    const component = {
      name: this.model.name,
      icon: this.model.icon,
      categoryId: this.model.category[0].id,
    } as DeviceComponent;

    if (this.isCreateMode) {
      this.componentService.addDeviceComponent(component).subscribe(
        (next) => {
          this.alertService.success('Component added');
          this.router.navigateByUrl('/admin/information/components');
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    } else {
      this.componentService.updateDeviceComponent(component).subscribe(
        (next) => {
          this.alertService.success('Component updated');
          this.router.navigateByUrl('/admin/information/components');
        },
        (error) => {
          this.alertService.error(error);
        }
      );
    }
  }

  onReturnClick(): void {
    this.router.navigateByUrl('/admin/information/components');
  }

  getHeader(): string {
    if (this.model.category[0]) {
      return this.model.category[0].name;
    }
    return 'Choose category';
  }
}
